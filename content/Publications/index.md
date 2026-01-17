---
outline: 1
sidebar: false
prev: false
next: false
---

<script setup>
import Publication from "../../components/Publication.vue"
</script>

<!--
How to add an article:

You should first add some "publication tags", which can enclose content. They look like this:

<Publication
    title="Enter the title of the work here"
    authors="Author 1; Author 2; ..."
    journal="Journal name goes here"
    doi="DOI number here if applicable"
    status="Published or In production or In review"
    open-access
    >

Enclosed content goes here...

</Publication>

Enter applicable metadata within quotes at the opening publication tag, and remove lines that are not needed (most items are optional).
(I.e. remove "open-access" if it is not open access, remove DOI if you don't have or want links to the article).

If you don't want to publish the abstract, do not enter any "enclosed content". If you do, add the abstract there. The lines with abstract headings
should start with ###, and there must be a blank line between heading lines and the next/previous lines.

-->

<Publication
    title="Exploring Primary Care Patients’ Perspectives on Artificial Intelligence: A systematic literature review and qualitative meta-synthesis"
    authors="Alisa Mundzic; Robin Bogdanffy; David Sundemo; Pär-Daniel Sundvall; Jonathan Widén; Peter Nymberg; Carl Wikberg; Anna Moberg; Ronny Gunnarsson; Artin Entezarjou"
    journal="JMIR AI"
    doi="10.2196/72211"
    status="Published"
    open-access
    >

### Background:

The introduction of Artificial Intelligence (AI) in healthcare holds great promise, offering the potential to alleviate physicians’ workloads and allocate more time for patient interactions. Experts believe that Large Language Models, (LLMs) will have a strong impact on a range of healthcare applications. However, patients have expressed concerns about the ethical implications and use of AI in primary care. Understanding patients’ perspectives on using AI in primary care is crucial for its effective integration. Despite this, few studies have addressed patients’ perspectives on using AI in primary care.

### Objective:

This study aimed to synthesize qualitative research on primary care patients’ perspectives regarding the use of AI and Large Language Models (LLMs) in primary care.

### Methods:

A qualitative systematic review, using thematic analysis, was performed in accordance with PRISMA guidelines. PubMed, Scopus, Web of Science, CINAHL and PsycINFO, were searched from inception to February 5th, 2024. Eligible studies employed a qualitative interview research design, explored primary care patients’ perspectives on the use of artificial intelligence and LLM in primary care, were written in English, and were published in peer-reviewed scientific journals. Quantitative studies, grey literature, surveys, and studies lacking depth in qualitative analysis were excluded. Critical Appraisal Skills Program, (CASP) checklist was used for quality assessment.

### Results:

Of 1004 studies screened, six were included, comprising 170 patients aged 13 to 91 years from three countries. Three themes emerged: “The Relationship with and Actions of AI-systems”, “Implementing AI responsibly”, and “Training Physicians and Artificial Minds”. Patients acknowledged AI’s potential benefits but advocated for clinician oversight, safety frameworks, and the preservation of patient autonomy.

### Conclusions:

This systematic review provides a comprehensive understanding of patients’ perspectives on AI in primary care. We identified heterogeneity in AI definitions across studies. Further research is needed on patients’ perspectives across different countries and particularly regarding LLMs.
</Publication>

<Publication
    title="Exploring Clinician Perspectives on Artificial Intelligence in Primary Care: a qualitative systematic review and meta synthesis"
    authors="Robin Bogdanffy;  Alisa Mundzic;  Peter Nymberg;  David Sundemo;  Anna Moberg;  Carl Wikberg;  Ronny Kent Gunnarsson;  Jonathan Widén;  Pär-Daniel Sundvall;  Artin Entezarjou"
    journal="JMIR AI"
    doi="10.2196/72210"
    status="In production"
    open-access
    >

</Publication>

<Publication
    title="ChatGPT (GPT-4) versus doctors on complex cases of the Swedish family medicine specialist examination: an observational comparative study"
    authors="Rasmus Arvidsson; Ronny Gunnarsson; Artin Entezarjou; David Sundemo; Carl Wikberg"
    journal="BMJ Open"
    doi="10.1136/bmjopen-2024-086148"
    status="Published"
    id="chatgpt-vs-doctors"
    open-access
    >

### Background:

Recent breakthroughs in artificial intelligence research include the development of generative pretrained transformers (GPT). ChatGPT has been shown to perform well when answering several sets of medical multiple-choice questions. However, it has not been tested for writing free-text assessments of complex cases in primary care.

### Objectives:

To compare the performance of ChatGPT, version GPT-4, with that of real doctors.

### Design and setting:

A blinded observational comparative study conducted in the Swedish primary care setting. Responses from GPT-4 and real doctors to cases from the Swedish family medicine specialist examination were scored by blinded reviewers, and the scores were compared.

### Participants:

Anonymous responses from the Swedish family medicine specialist examination 2017–2022 were used.

### Outcome measures:

Primary: the mean difference in scores between GPT-4’s responses and randomly selected responses by human doctors, as well as between GPT-4’s responses and top-tier responses by human doctors. Secondary: the correlation between differences in response length and response score; the intraclass correlation coefficient between reviewers; and the percentage of maximum score achieved by each group in different subject categories.

### Results:

The mean scores were 6.0, 7.2 and 4.5 for randomly selected doctor responses, top-tier doctor responses and GPT-4 responses, respectively, on a 10-point scale. The scores for the random doctor responses were, on average, 1.6 points higher than those of GPT-4 (p<0.001, 95% CI 0.9 to 2.2) and the top-tier doctor scores were, on average, 2.7 points higher than those of GPT-4 (p<0.001, 95 % CI 2.2 to 3.3). Following the release of GPT-4o, the experiment was repeated, although this time with only a single reviewer scoring the answers. In this follow-up, random doctor responses were scored 0.7 points higher than those of GPT-4o (p=0.044).

### Conclusion:

In complex primary care cases, GPT-4 performs worse than human doctors taking the family medicine specialist examination. Future GPT-based chatbots may perform better, but comprehensive evaluations are needed before implementing chatbots for medical decision support in primary care.

</Publication>