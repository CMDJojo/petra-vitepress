---
outline: 1
---

<script setup>
import PetraArticle from "../../components/PetraArticle.vue"
</script>

<!--
How to add an article:

You should first add some "article tags", which can enclose content. They look like this:

<PetraArticle
    title="Enter the title of the work here"
    authors="Author 1; Author 2; ..."
    journal="Journal name goes here"
    doi="DOI number here if applicable"
    status="Published or In production or In review"
    open-access
    >

Enclosed content goes here...

</PetraArticle>

Enter applicable metadata within quotes, and remove lines that are not needed (most items are optional). Remove "open-access" if it is not open access.

If you don't want to publish the abstract, do not enter any "enclosed content". If you do, add the abstract there. The lines with abstract headings
should start with ###, and there must be a blank line between heading lines and the next/previous lines.

-->

<PetraArticle
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
</PetraArticle>
