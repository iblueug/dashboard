/* Add to your existing CSS */
.file-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    background: var(--gray-100);
    border-radius: var(--radius-sm);
    margin-bottom: 8px;
    animation: slideIn 0.3s ease;
    border-left: 3px solid var(--secondary);
}

.file-name {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    flex: 1;
}

.file-name i {
    color: var(--secondary);
    font-size: 16px;
}

.file-size {
    color: var(--gray-500);
    font-size: 11px;
    margin-left: 8px;
}

.file-remove {
    color: var(--danger);
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
    transition: all 0.2s;
}

.file-remove:hover {
    background: rgba(239, 68, 68, 0.1);
    transform: scale(1.1);
}

.upload-area.dragover {
    border-color: var(--primary);
    background: rgba(11, 79, 108, 0.1);
    transform: scale(1.02);
}