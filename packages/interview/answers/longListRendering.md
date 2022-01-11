# 长列表渲染

## 问题描述

当数据量太大时，直接渲染生成大量的 dom，不仅会占用大量的内存，还会造成用户交互卡顿和延迟

## 解决方案

### 虚拟列表

基本思路是只渲染用户可见及其前后的元素，监听 scroll 事件，动态渲染部分数据。
将容器元素设置为 relative，子列表通过 absolute，设置 offset 相关属性