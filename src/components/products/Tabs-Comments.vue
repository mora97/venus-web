<template>
  <div id="comments">
    <div id="write-comment">
      <write-comment></write-comment>
    </div>    
    <comments-item class="mt-1"></comments-item>
    <comments-item class="mt-1"></comments-item>
    <comments-item class="mt-1"></comments-item>
  </div>
</template>

<script>
import CommentsItem from "./Tabs-Comments-Item";
import WriteComment from './Tabs-Comment-Write'

export default {
  components: {
    CommentsItem,
    WriteComment
  }
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-thumb {
  background: rgb(255, 252, 252);
}
::-webkit-scrollbar-track {
  background: rgb(255, 252, 252);
  margin-top: 3px;
}
#comments {
  overflow-y: auto;
  border: 1px solid var(--border-color);
  height: 30em;
  padding: 0.2em 0.5em;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
}

@media (max-width: 768px) {
  #comments {
    border-radius: 8px;
  }
  #write-comment {
    display: none
  }
}
</style>