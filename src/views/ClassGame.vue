<template>
  <div class="row simpleDemo">
    <div class="alert alert-success" role="alert">
      Instructions: Drag & drop the list items to move them around, or just
      click to select them.
      <a
        class="source-link"
        href="https://github.com/Alex-fun/vue-drag-and-drop-list/blob/master/demo/src/views/simple.vue"
        >View source</a
      >
    </div>
    <div v-for="(listName, list) in lists" class="col-md-4">
      <div class="panel panel-vue">
        <div class="panel-heading">
          <h3 class="panel-title">List {{ listName }}</h3>
        </div>
        <div class="panel-body">
          <ul v-dnd-list :dnd-list="list" :dnd-horizontal-list="false">
            <li
              v-dnd-draggable
              v-for="item in list"
              :dnd-draggable="item"
              :dnd-index="$index"
              :dnd-data="list"
              dnd-selected="selectedEvent"
              dnd-effect-allowed="move"
              dnd-dragstart="handleDragstart"
              dnd-dragend="handleDragend"
              dnd-canceled="handleCanceled"
              v-bind:class="{ selected: selected === item }"
            >
              {{ item.label }}
            </li>
            <li class="dndPlaceholder red">Custom placeholder</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      lists: {
        A: [
          {
            label: "Item A1",
            disable: false,
          },
          {
            label: "Item A2",
          },
          {
            label: "Item A3",
          },
          {
            label: "Item A4",
          },
        ],
        B: [
          {
            label: "Item B1",
          },
          {
            label: "Item B2",
          },
          {
            label: "Item B3",
          },
          {
            label: "Item B4",
          },
        ],
        C: [
          {
            label: "Item C1",
          },
          {
            label: "Item C2",
          },
          {
            label: "Item C3",
          },
          {
            label: "Item C4",
          },
        ],
      },
    };
  },
  methods: {
    selectedEvent: function (item) {
      this.selected = item;
    },
    handleDragstart: function () {
      console.log("handleDragstart");
    },
    handleDragend: function () {
      console.log("handleDragend");
    },
    handleCanceled: function () {
      console.log("handleCanceled");
    },
  },
};
</script>

<style lang="less">
/**
 * For the correct positioning of the placeholder element, the dnd-list and
 * it's children must have position: relative
 */
.simpleDemo ul[dnd-list],
.simpleDemo ul[dnd-list] > li {
  position: relative;
}
/**
 * The dnd-list should always have a min-height,
 * otherwise you can't drop to it once it's empty
 */
.simpleDemo ul[dnd-list] {
  padding-left: 0px;
  min-height: 40px;
}
/**
 * The dndDraggingSource class will be applied to
 * the source element of a drag operation. It makes
 * sense to hide it to give the user the feeling
 * that he's actually moving it.
 */
.simpleDemo ul[dnd-list] .dndDragging {
  opacity: 0.7;
}
.simpleDemo ul[dnd-list] .dndDraggingSource {
  display: none;
}
/**
 * An element with .dndPlaceholder class will be
 * added to the dnd-list while the user is dragging
 * over it.
 */
.simpleDemo ul[dnd-list] .dndPlaceholder {
  display: block;
  background-color: #eee;
  min-height: 41px;
}
.simpleDemo ul[dnd-list] .dndPlaceholder.red {
  color: #f26b63;
}
/**
 * The dnd-lists's child elements currently MUST have
 * position: relative. Otherwise we can not determine
 * whether the mouse pointer is in the upper or lower
 * half of the element we are dragging over. In other
 * browsers we can use event.offsetY for this.
 */
.simpleDemo ul[dnd-list] li {
  background-color: #fff;
  color: #35495e;
  border-bottom: 1px solid #41b883;
  display: block;
  padding: 10px 15px;
}
.simpleDemo ul[dnd-list] li:last-child {
  border-bottom: none;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
/**
 * Show selected elements in green  有问题的
 */
.simpleDemo ul[dnd-list] li.selected {
  background-color: #dff0d8;
  color: #3c763d;
}
</style>
