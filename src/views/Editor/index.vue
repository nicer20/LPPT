<template>
	<div class="lppt-editor">
		<EditorHeader class="editor-header" />
		<div class="editor-content">
			<Thumbnails class="editor-content-left" />
			<div class="editor-content-center">
				<CanvasTool class="center-top" />
				<Canvas class="center-body" :style="{ height: `calc(100% - ${remarkHeight + 40}px)` }" />
				<!-- <Remark class="center-bottom" v-model:height="remarkHeight" :style="{ height: `${remarkHeight}px` }" /> -->
			</div>
			<Toolbar class="editor-content-right" />
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	import { storeToRefs } from "pinia";

	const remarkHeight = ref(40);
</script>

<style lang="scss" scoped>
	.pptist-editor {
		height: 100%;
	}
	.editor-header {
		height: 40px;
	}
	.editor-content {
		height: calc(100% - 40px);
		display: flex;
	}
	.editor-content-left {
		width: 160px;
		height: 100%;
		flex-shrink: 0;
	}
	.editor-content-center {
		width: calc(100% - 160px - 260px);

		.center-top {
			height: 40px;
		}
	}
	.editor-content-right {
		width: 260px;
		height: 100%;
	}
</style>
