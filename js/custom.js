document.addEventListener('DOMContentLoaded', function() {
    // 获取用户偏好（如果存在）
    const detailsOpen = localStorage.getItem('detailsOpen') === 'true';
    
    // 应用当前设置到所有details元素
    function applyDetailsState() {
      const currentState = localStorage.getItem('detailsOpen') === 'true';
      document.querySelectorAll('details').forEach(detail => {
        detail.open = currentState;
      });
      
      // 如果按钮存在，更新按钮文本
      const toggleButton = document.querySelector('.details-toggle');
      if (toggleButton) {
        toggleButton.textContent = currentState ? '隐藏所有答案' : '显示所有答案';
      }
    }
    
    // 初始应用设置
    applyDetailsState();
    
    // 检查按钮是否已存在（防止重复添加）
    if (!document.querySelector('.details-toggle')) {
      // 添加一个切换按钮到页面
      const header = document.querySelector('.md-header__inner');
      if (header) {
        const toggleButton = document.createElement('button');
        toggleButton.textContent = detailsOpen ? '隐藏所有答案' : '显示所有答案';
        toggleButton.className = 'md-button md-button--primary details-toggle';
        toggleButton.style.margin = '0 1rem';
        
        toggleButton.addEventListener('click', function() {
          // 更新存储的偏好（反转当前状态）
          const newState = !(localStorage.getItem('detailsOpen') === 'true');
          localStorage.setItem('detailsOpen', newState);
          
          // 应用新状态
          applyDetailsState();
        });
        
        header.appendChild(toggleButton);
      }
    }
    
    // 监听导航事件，处理页面内容变化
    const contentArea = document.querySelector('.md-content');
    if (contentArea) {
      // 使用MutationObserver监听DOM变化
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.addedNodes.length > 0) {
            // 检测到内容变化，重新应用详情状态
            applyDetailsState();
          }
        });
      });
      
      // 开始观察
      observer.observe(contentArea, { childList: true, subtree: true });
    }
  });