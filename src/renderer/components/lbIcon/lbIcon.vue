<template>
    <div v-if="type.indexOf('svg')==-1" :class="[typeClass]" :style="{color:color,'font-size':fontSize}"
         @click="onClick()"></div>
    <svg v-else-if="type.indexOf('svg')>-1" :class="[typeClass]" aria-hidden="true" :style="{'font-size':fontSize}">
      <use :xlink:href="getIcon"></use>
    </svg>
</template>

<script>
export default {
  name: 'lbIcon',
  props: {
    /**
     * 图标类型
     */
    type: String,
    /**
     * 图标颜色
     */
    color: String,
    /**
     * 图标大小
     */
    size: [Number, String]
  },
  computed: {
    getIcon() {
      return `#${this.type.replace("svg-", "")}`;
    },
    fontSize() {
      return `${this.size}px`
    },
    typeClass() {
      if (this.type.indexOf('fa') != -1) {
        return `lb-icon fa ${this.type}`
      } else if (this.type.indexOf('if') != -1) {
        return `lb-icon iconfont ${this.type}`
      } else if (this.type.indexOf('svg') != -1) {
        return `lb-icon icon`
      } else {
        return `lb-icon fa fa-exclamation-circle`
      }
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style>
@import './font-awesome.css';
@import './iconfont.css';

.lb-icon.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

/*增加 */
.ant-menu-item .lb-icon, .ant-menu-submenu-title .lb-icon, .ant-dropdown-menu-item .lb-icon {
  min-width: 14px;
  margin-right: 10px;
}

</style>
