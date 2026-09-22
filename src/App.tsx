import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { ObjectProfileModal } from './components/ObjectProfileModal';
import { CreatePostModal } from './components/CreatePostModal';
import { SavedCollectionModal } from './components/SavedCollectionModal';
import { ChatDrawer } from './components/ChatDrawer';
import { ObjectArchiveView } from './components/ObjectArchiveView';
import { CommunityGroupsView } from './components/CommunityGroupsView';
import { DesignerNetworkView } from './components/DesignerNetworkView';
import { ScanPatternWorkspace } from './components/ScanPatternWorkspace';
import { FacebookFeedView } from './components/FacebookFeedView';
import { ShotsProductView } from './components/ShotsProductView';
import { FurnitureMagazineView } from './components/FurnitureMagazineView';
import { DribbbleFooter } from './components/DribbbleFooter';

import { 
  INITIAL_OBJECTS, 
  INITIAL_POSTS, 
  INITIAL_DESIGNERS, 
  INITIAL_GROUPS, 
  CURRENT_USER 
} from './data/mockData';
import { ObjectProfile, Post, Designer, CommunityGroup, CommunityMemory } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'social' | 'magazine' | 'feed' | 'objects' | 'groups' | 'designers' | 'scan'>('feed');
  const [objects, setObjects] = useState<ObjectProfile[]>(INITIAL_OBJECTS);
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [designers, setDesigners] = useState<Designer[]>(INITIAL_DESIGNERS);
  const [groups, setGroups] = useState<CommunityGroup[]>(INITIAL_GROUPS);
  const [selectedGroup, setSelectedGroup] = useState<CommunityGroup>(INITIAL_GROUPS[0]);
  const [savedObjectIds, setSavedObjectIds] = useState<string[]>(['obj-cloudy-bplus']);
  
  // Modals & Drawers
  const [selectedObjectForModal, setSelectedObjectForModal] = useState<ObjectProfile | null>(null);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [preSelectedObjectForPost, setPreSelectedObjectForPost] = useState<ObjectProfile | null>(null);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);
  const [chatContact, setChatContact] = useState<string | null>(null);
  
  // Search & Filter
  const [searchQuery, setSearchQuery] = useState('');
  const handleToggleSaveObject = (objectId: string) => {
    setSavedObjectIds((prev) =>
      prev.includes(objectId) ? prev.filter((id) => id !== objectId) : [...prev, objectId]
    );
  };

  const handleAddComment = (postId: string, commentText: string) => {
    const newComment = {
      id: Date.now().toString(),
      author: {
        name: CURRENT_USER.name,
        avatar: CURRENT_USER.avatar,
        role: CURRENT_USER.role,
        badge: 'Người yêu đồ vật'
      },
      content: commentText,
      timestamp: 'Vừa xong',
      likes: 0
    };

    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          return {
            ...p,
            commentsCount: p.commentsCount + 1,
            comments: [newComment, ...p.comments]
          };
        }
        return p;
      })
    );
  };

  const handleCreatePost = (newPostData: Partial<Post>) => {
    const newPost: Post = {
      id: `post-${Date.now()}`,
      author: {
        name: CURRENT_USER.name,
        avatar: CURRENT_USER.avatar,
        role: CURRENT_USER.role,
        verified: true
      },
      timestamp: 'Vừa xong',
      type: newPostData.type || 'editorial_story',
      taggedObject: newPostData.taggedObject,
      content: newPostData.content || '',
      images: newPostData.images || [],
      provenanceBadges: newPostData.provenanceBadges || [],
      likes: 1,
      isLiked: true,
      isSaved: false,
      commentsCount: 0,
      sharesCount: 0,
      comments: []
    };

    setPosts([newPost, ...posts]);
  };

  const handleAddMemoryToObject = (objectId: string, memoryData: Partial<CommunityMemory>) => {
    const newMemory: CommunityMemory = {
      id: `mem-${Date.now()}`,
      author: memoryData.author || {
        name: CURRENT_USER.name,
        avatar: CURRENT_USER.avatar,
        role: CURRENT_USER.role
      },
      ownershipDuration: memoryData.ownershipDuration || 'Đã sở hữu 6 tháng',
      content: memoryData.content || '',
      date: 'Vừa xong',
      likes: 1
    };

    setObjects((prev) =>
      prev.map((obj) => {
        if (obj.id === objectId) {
          return {
            ...obj,
            communityMemories: [newMemory, ...obj.communityMemories]
          };
        }
        return obj;
      })
    );

    if (selectedObjectForModal && selectedObjectForModal.id === objectId) {
      setSelectedObjectForModal({
        ...selectedObjectForModal,
        communityMemories: [newMemory, ...selectedObjectForModal.communityMemories]
      });
    }
  };

  const handleToggleFollowDesigner = (designerId: string) => {
    setDesigners((prev) =>
      prev.map((d) => {
        if (d.id === designerId) {
          return { ...d, isFollowing: !d.isFollowing };
        }
        return d;
      })
    );
  };

  const handleToggleJoinGroup = (groupId: string) => {
    setGroups((prev) =>
      prev.map((g) => {
        if (g.id === groupId) {
          return { ...g, isJoined: !g.isJoined };
        }
        return g;
      })
    );
  };

  const savedObjectsList = useMemo(() => {
    return objects.filter((o) => savedObjectIds.includes(o.id));
  }, [objects, savedObjectIds]);

  return (
    <div className="monos-app min-h-screen bg-[#f8f8f8] text-[#0d0c22] font-sans antialiased flex flex-col selection:bg-[#ea4c89]/20 selection:text-[#ea4c89]">
      {/* Dribbble Top Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenCreatePost={() => {
          setPreSelectedObjectForPost(null);
          setIsCreatePostOpen(true);
        }}
        onOpenChat={(name) => setChatContact(name || 'Hoàng Vũ (B+ Studio)')}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        savedCount={savedObjectIds.length}
        onOpenSavedModal={() => setIsSavedModalOpen(true)}
      />

      {/* SOCIAL NETWORK: STORIES, OBJECT MEMORIES & WORKSHOP UPDATES */}
      {activeTab === 'social' && (
        <FacebookFeedView
          posts={posts}
          objects={objects}
          designers={designers}
          setActiveTab={setActiveTab}
          onOpenCreatePost={() => {
            setPreSelectedObjectForPost(null);
            setIsCreatePostOpen(true);
          }}
          onOpenChat={(name) => setChatContact(name || 'Hoàng Vũ (B+ Studio)')}
          onOpenScanPattern={() => setActiveTab('scan')}
          onToggleFollowDesigner={handleToggleFollowDesigner}
          onLikePost={(id) => {
            setPosts((prev) =>
              prev.map((p) =>
                p.id === id
                  ? {
                      ...p,
                      isLiked: !p.isLiked,
                      likes: p.isLiked ? p.likes - 1 : p.likes + 1
                    }
                  : p
              )
            );
          }}
          onSavePost={(id) => {
            setPosts((prev) =>
              prev.map((p) =>
                p.id === id ? { ...p, isSaved: !p.isSaved } : p
              )
            );
          }}
          onAddComment={handleAddComment}
          onOpenObjectProfile={(obj) => setSelectedObjectForModal(obj)}
          onContributeMemory={(obj) => {
            setPreSelectedObjectForPost(obj);
            setIsCreatePostOpen(true);
          }}
          onAddNewStreamedPost={(freshPost) => {
            setPosts((prev) => [freshPost, ...prev]);
          }}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      )}

      {/* VIEW: ONLINE FURNITURE MAGAZINE (TẠP CHÍ NỘI THẤT CHUYÊN KHẢO) */}
      {activeTab === 'magazine' && (
        <FurnitureMagazineView
          onOpenObjectProfile={(obj) => setSelectedObjectForModal(obj)}
          onNavigateToFeed={() => setActiveTab('feed')}
        />
      )}

      {/* SHOTS: B+ PRODUCTS PRESENTED IN THE CLEAN CARD FORMAT */}
      {activeTab === 'feed' && (
        <ShotsProductView
          objects={objects}
          savedObjectIds={savedObjectIds}
          onToggleSaveObject={handleToggleSaveObject}
          onOpenObjectProfile={(obj) => setSelectedObjectForModal(obj)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      )}

      {/* VIEW 2: OBJECT ARCHIVE & PROFILES */}
      {activeTab === 'objects' && (
        <ObjectArchiveView
          objects={objects}
          onOpenObjectProfile={(obj) => setSelectedObjectForModal(obj)}
          savedObjectIds={savedObjectIds}
          onToggleSaveObject={handleToggleSaveObject}
          onOpenCreateObjectModal={() => {
            setPreSelectedObjectForPost(null);
            setIsCreatePostOpen(true);
          }}
        />
      )}

      {/* VIEW 3: DESIGNER & WORKSHOP NETWORK */}
      {activeTab === 'designers' && (
        <DesignerNetworkView
          designers={designers}
          objects={objects}
          onToggleFollowDesigner={handleToggleFollowDesigner}
          onOpenChatWithDesigner={(name) => setChatContact(name)}
          onOpenObjectProfile={(obj) => setSelectedObjectForModal(obj)}
        />
      )}

      {/* VIEW 4: SCAN PATTERN WORKSPACE */}
      {activeTab === 'scan' && (
        <ScanPatternWorkspace
          initialObject={objects[0]}
          onViewObjectProfile={(obj) => setSelectedObjectForModal(obj)}
        />
      )}

      {/* VIEW 5: COMMUNITY GROUPS */}
      {activeTab === 'groups' && (
        <CommunityGroupsView
          groups={groups}
          selectedGroup={selectedGroup}
          onSelectGroup={setSelectedGroup}
          onToggleJoinGroup={handleToggleJoinGroup}
          groupPosts={posts}
          onLikePost={(id) => {
            setPosts(prev => prev.map(p => p.id === id ? { ...p, isLiked: !p.isLiked, likes: p.isLiked ? p.likes - 1 : p.likes + 1 } : p));
          }}
          onSavePost={(id) => {
            setPosts(prev => prev.map(p => p.id === id ? { ...p, isSaved: !p.isSaved } : p));
          }}
          onAddComment={handleAddComment}
          onOpenObjectProfile={(obj) => setSelectedObjectForModal(obj)}
          onOpenCreatePost={() => {
            setPreSelectedObjectForPost(null);
            setIsCreatePostOpen(true);
          }}
        />
      )}

      {/* Keep the catalog landing page focused; richer community footer remains
          available on the editorial and community surfaces. */}
      {activeTab !== 'social' && (
        <DribbbleFooter
          onOpenCreate={() => setIsCreatePostOpen(true)}
        />
      )}

      {/* MODAL 1: Object Profile Modal (Dribbble Project Detail) */}
      <ObjectProfileModal
        object={selectedObjectForModal}
        onClose={() => setSelectedObjectForModal(null)}
        isSaved={selectedObjectForModal ? savedObjectIds.includes(selectedObjectForModal.id) : false}
        onToggleSave={handleToggleSaveObject}
        onAddMemory={handleAddMemoryToObject}
        onOpenScanWorkspaceWithObject={(obj) => {
          setSelectedObjectForModal(null);
          setActiveTab('scan');
        }}
      />

      {/* MODAL 2: Create Post / Upload Shot Modal */}
      <CreatePostModal
        isOpen={isCreatePostOpen}
        onClose={() => setIsCreatePostOpen(false)}
        availableObjects={objects}
        preSelectedObject={preSelectedObjectForPost}
        onSubmitPost={handleCreatePost}
      />

      {/* MODAL 3: Saved Collection Modal */}
      <SavedCollectionModal
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        savedObjects={savedObjectsList}
        onRemoveFromSaved={handleToggleSaveObject}
        onOpenObjectProfile={(obj) => {
          setIsSavedModalOpen(false);
          setSelectedObjectForModal(obj);
        }}
      />

      {/* DRAWER: Direct Messenger with Makers */}
      <ChatDrawer
        isOpen={chatContact !== null}
        onClose={() => setChatContact(null)}
        contactName={chatContact || 'Xưởng chế tác B+'}
      />
    </div>
  );
}
