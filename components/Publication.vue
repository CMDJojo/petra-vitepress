<script setup lang="ts">

import { ref } from 'vue'

defineProps<{
    title: string,
    authors: string,
    journal?: string,
    doi?: string,
    status?: ArticleStatus,
    openAccess?: boolean
}>();

export type ArticleStatus = "Published" | "In production" | "In review"

const toLink = d => `https://doi.org/${d}`

const minified = ref<boolean>(true);

const statusMap = {"Published": "published", "In production": "inprod", "In review": "inreview"}
const genId = x => x.toLowerCase().replace(/[^a-z0-9]/g, "-")

</script>

<template>
    <div class="article" :class="$style.article">
        <h1 :id="genId(title)">{{title}}</h1>
        <em v-if="authors">{{authors}}</em>
        <p v-if="journal" class="journal">Journal: <em>{{journal}}</em></p>

        <div class="badges">
            <a v-if="doi" class="doi badge" :href="toLink(doi)">DOI: {{doi}}</a>
            <div v-if="statusMap[status]" class="badge" :class="statusMap[status]">
                {{status}}
            </div>
            <div v-if="openAccess" class="open-access badge">Open access</div>
        </div>

        <div v-if="$slots.default" class="abstract-wrapper">
            <div class="abstract" :class="{minified}">
                <h2>ABSTRACT</h2>
                <slot />
            </div>
            <p v-if="!minified && doi" class="read-full">
                <a :href="toLink(doi)">Read article</a>
            </p>
            <button @click="minified = !minified" class="more">{{minified ? "Show" : "Hide"}} full abstract</button>
        </div>
    </div>
</template>

<style scoped>
.abstract {

}

.minified {
    max-height: 20rem;
    overflow: hidden;
    mask-image: linear-gradient(180deg, #000 60%, transparent);
}

button.more {
    font-weight: 600;
}

.badges  {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.badge {
    padding: 0rem 1rem;
    border-radius: 5px;
    border: 0.5px solid black;
    padding: 0.2rem 1rem;
    margin: 0.2rem 1rem;
    text-decoration-line: none;
    display: block;
    color: black;
    text-align: center;
    font-weight: 600;
    font-size: 0.8em;
    pointer-events: none;
}

.doi {
    background-color: #48c89d;
    pointer-events: auto;
}

.inprod {
    background-color: #dddd07;
}

.published {
    background-color: cyan;
}

.inreview {
    background-color: #ff8989;
}

.open-access {
    background-color: #636363;
    color: white;
}

.journal {
    font-weight: 500;
}

.article {
    background-color: rgb(246, 246, 247);
    border-radius: 8px;
    padding: 2rem;
    margin-bottom: 3rem;
}

.read-full {
    margin-bottom: 1rem;
}

.dark .article {
    background-color: rgb(0, 0, 0);
}
</style>

<style module>
.article h1,
.article h2,
.article h3 {
    font-family: "DM Serif Text", serif;
}
</style>