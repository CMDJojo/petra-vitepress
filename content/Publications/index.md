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
title="Acceptable Accuracy for Medical AI: A Survey of Physicians and the General Population in Sweden"
authors="Rasmus Arvidsson; Jonathan Widén; Lina Al-Naasan; Ronny Kent K Gunnarsson; Peter Nymberg; Charlotte R Blease; Anna Moberg; Pär-Daniel Sundvall; Carl Wikberg; David Sundemo"
    journal="BMJ Health & Care Informatics"
    status="Published"
    doi="10.1136/bmjhci-2025-101899"
    open-access
    >

### Objectives:

To identify the lowest sensitivity and specificity that physicians and the general population consider acceptable for medical artificial intelligence (AI), relative to current human performance.

### Methods:

In a nationwide, cross-sectional survey in Sweden, 2025, random samples of 500 physicians and 500 adults from the general population were mailed a questionnaire presenting three vignettes (chest pain triage, sore throat triage, ECG myocardial infarction detection) with the corresponding human performance. Participants reported the maximum number of cases an AI should be allowed to miss or over-refer.

### Results:

Response rates were 45% among physicians and 31% in the general population. Both groups demanded higher AI accuracy than the human benchmark for all cases. In the chest pain triage vignette, the nurse correctly referred 84 of 100 true emergencies; physicians required the AI to correctly refer 11 additional patients (95% sensitivity) and the general population demanded referral of 16 additional patients (100% sensitivity) (p<0.001 for both groups). Among 100 patients not requiring referral, the nurse would mistakenly refer 66. Both groups required the AI to reduce unnecessary referrals by 16 (50% specificity) (p<0.001). A similar pattern was observed in the other vignettes.

### Discussion:

The accuracy thresholds required by the respondents exceed the performance of many existing systems, although emerging AI research shows promise in narrowing the gap.

### Conclusion:

Physicians and the general population require medical AI systems to outperform human clinicians. When implementing AI in healthcare settings, early engagement with both groups may be necessary to align expectations with real-world system performance.

</Publication>

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
    status="Published"
    open-access
    >

### Background:

Recent advances have highlighted the potential of artificial intelligence (AI) systems to assist clinicians with administrative and clinical tasks, but concerns regarding biases, lack of regulation, and potential technical issues pose significant challenges. The lack of a clear definition of AI, combined with limited focus on qualitative research exploring clinicians' perspectives, has limited the understanding of perspectives on AI in primary health care settings.

### Objective:

This review aims to synthesize current qualitative research on the perspectives of clinicians on AI in primary care settings.

### Methods:

A systematic search was conducted in MEDLINE (PubMed), Scopus, Web of Science, and CINAHL (EBSCOhost) databases for publications from inception to February 5, 2024. The search strategy was designed using the Sample, Phenomenon of Interest, Design, Evaluation, and Research type (SPIDER) framework. Studies were eligible if they were published in English, peer-reviewed, and provided qualitative analyses of clinician perspectives on AI in primary health care. Studies were excluded if they were gray literature, used questionnaires, surveys, or similar methods for data collection, or if the perspectives of clinicians were not distinguishable from those of nonclinicians. A qualitative systematic review and thematic synthesis were performed. The Grading of Recommendations Assessment, Development and Evaluation-Confidence in Evidence from Reviews of Qualitative Research (GRADE-CERQual) approach was used to assess confidence in the findings. The CASP (Critical Appraisal Skills Program) checklist for qualitative research was used for risk-of-bias and quality appraisal.

### Results:

A total of 1492 records were identified, of which 13 studies from 6 countries were included, representing qualitative data from 238 primary care physicians, nurses, physiotherapists, and other health care professionals providing direct patient care. Eight descriptive themes were identified and synthesized into 3 analytical themes using thematic synthesis: (1) the human-machine relationship, describing clinicians’ thoughts on AI assistance in administration and clinical work, interactions between clinicians, patients, and AI, and resistance and skepticism toward AI; (2) the technologically enhanced clinic, highlighting the effects of AI on the workplace, fear of errors, and desired features; and (3) the societal impact of AI, reflecting concerns about data privacy, medicolegal liability, and bias. GRADE-CERQual assessment rated confidence as high in 15 findings, moderate in 5 findings, and low in 1 finding.

### Conclusions:

Clinicians view AI as a technology that can both enhance and complicate primary health care. While AI can provide substantial support, its integration into health care requires careful consideration of ethical implications, technical reliability, and the maintenance of human oversight. Interpretation is constrained by heterogeneity in qualitative methods and the diversity of AI technologies examined across studies. More in-depth qualitative research on the effects of AI on clinicians’ careers and autonomy could prove helpful for the future development of AI systems.
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

<Publication
    title="Ethical risks of AI-enabled remote patient monitoring for COPD: a multi-dimensional use case analysis"
    authors="D Behdadi; Lowie E. G. W. Vanfleteren; David Sundemo"
    journal="AI & Society"
    doi="10.1007/s00146-025-02806-9"
    status="Published"
    id="ethical-risks-remote-monitoring"
    open-access
    >

Artificial intelligence (AI)-enabled remote patient monitoring (RPM) is promoted as a solution to rising pressures in health care, including personnel shortages and the growing burden associated with population aging and chronic disease management. Yet, the ethical implications of deploying adaptive systems in routine care remain underexamined at the level of specific, situated use cases. This article examines the ethical risks of MonitAir, an AI-enabled RPM system for chronic obstructive pulmonary disease (COPD) in a Swedish health care setting. Drawing on the Three Domains, Six Levels (3D6L) framework, we identify epistemic, normative and traceability-related risks across six levels of abstraction. The article offers, to our knowledge, the first operationalization of the 3D6L as an analytic tool for screening ethical risks. We argue that screening AI-enabled health care technology with 3D6L clarifies how ethical risks manifest across levels, from individual patients and patient–clinician relationships to organizational and sectoral contexts. In addition, the framework’s minimal normativity allows alignment with context-sensitive principles and guidelines. Through this analysis, we identify ethical risks related to data bias, intelligibility of outputs, uneven access and blurred responsibility, including redistributive and role-shifting effects. While MonitAir may support earlier detection of exacerbations, its implementation in Swedish COPD care may also reproduce and amplify existing health disparities or overburden patients without sufficient support. We demonstrate how structured ethical screening makes visible concerns typically overlooked by the optimization discourse in digital health. Finally, we argue that open-ended evaluation of ethical risks of AI-enabled DHT provides a valuable early phase that complements ethical assessment, without collapsing into checklist compliance.

</Publication>
