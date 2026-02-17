<script setup>
	import { ref, computed, onMounted } from 'vue';
	import MarkdownIt from 'markdown-it';

	const props = defineProps({
		noteName: {
		type: String,
		required: true,
		},
	});

	const markdownContent = ref('');

	const renderedMarkdown = computed(() => {
		const md = new MarkdownIt();
		return md.render(markdownContent.value);
	});

	onMounted(async () => {
		try {
		const response = await fetch(`/notes/${props.noteName}.md`);
		if (response.ok) {
			markdownContent.value = await response.text();
		} else {
			console.error('Failed to fetch the note.');
		}
		} catch (error) {
		console.error('Error fetching the note:', error);
		}
	});
</script>

<template>
	<div class="note">
		<div v-html="renderedMarkdown"></div>
	</div>
</template>

<style scoped>
.note :deep(h1) {
  font-size: 2em;
}

.note :deep(h2) {
  font-size: 1.5em;
}

.note :deep(h3) {
  font-size: 1.17em;
}
</style>
