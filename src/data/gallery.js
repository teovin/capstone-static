export const gallerySections = [
	{
		pk: 1,
		title: "Research Results",
		titleSlug: "research-results",
		description: "",
		order: 1,
	},
	{
		pk: 2,
		title: "Fun Stuff",
		titleSlug: "fun-stuff",
		description: "",
		order: 4,
	},
	{
		pk: 3,
		title: "Applications",
		titleSlug: "applications",
		description:
			"Applications using CAP data created by HLS staff, students, and affiliates.",
		order: 5,
	},
	{
		pk: 4,
		title: "Coursework",
		titleSlug: "coursework",
		description: "",
		order: 2,
	},
	{
		pk: 5,
		title: "Tutorials",
		titleSlug: "tutorials",
		description: "",
		order: 7,
	},
	{
		pk: 6,
		title: "Applications (Third Party)",
		titleSlug: "applications-third-party",
		description: "Applications using CAP data created by third parties.",
		order: 6,
	},
	{
		pk: 7,
		title: "Blog Posts",
		titleSlug: "blog-posts",
		description: "Third party explorations of CAP data.",
		order: 3,
	},
];

export const galleryItems = [
	//
	// INTERNAL
	//
	{
		pk: 1,
		title: "Wordclouds",
		description:
			"Graphics showcasing the most-used words in California caselaw each year between 1852 and 2015.",
		section: 2,
		order: 5,
		pageUrl: "https://perma.cc/72GM-3BRZ",
		repoUrl:
			"https://github.com/harvard-lil/cap-examples-old/blob/master/make_wordclouds.py",
		image: "gallery-image-01.png",
	},
	{
		pk: 2,
		title: "Witchcraft in Caselaw",
		description:
			'See all instances of "witchcraft" charted out on the U.S. map.',
		section: 2,
		order: 3,
		pageUrl: "https://perma.cc/Y2GZ-535C",
		repoUrl:
			"https://github.com/harvard-lil/cap-examples/blob/master/api_wordsearch/wordsearch.py",
		image: "gallery-image-02.png",
	},
	{
		pk: 3,
		title: "Limericks",
		description: "Generate rhymes using caselaw!",
		section: 2,
		order: 10,
		pageUrl: "https://perma.cc/KK7N-U23P",
		repoUrl:
			"https://github.com/harvard-lil/cap-examples-old/blob/master/generate_limerick.py",
		image: "gallery-image-03.png",
	},
	{
		pk: 31,
		title: "Cite Grid",
		description:
			"Cite Grid uses our citation graph data to visualize how states and other jurisdictions tend to cite to each other.",
		section: 3,
		order: 2,
		pageUrl: "https://perma.cc/5GMX-VHBA",
		repoUrl: null,
		image: "gallery-image-31.png",
	},
	//
	// EXTERNAL
	//
	{
		pk: 4,
		title: "GAVELFURY",
		description: 'See all instances of "!"',
		section: 2,
		order: 20,
		pageUrl: "http://www.gavelfury.com/",
		repoUrl: null,
		image: "gallery-image-04.png",
	},
	{
		pk: 5,
		title: "Code Examples",
		description:
			"See some ways of getting started with the data! Examples are written in Python.",
		section: 5,
		order: 4,
		pageUrl: null,
		repoUrl: "https://github.com/harvard-lil/cap-examples",
		image: "gallery-image-05.png",
	},
	{
		pk: 7,
		title: "H2O",
		description:
			"H2O uses the CAP API to provide free caselaw textbooks for anyone.",
		section: 3,
		order: 1,
		pageUrl: "https://opencasebook.org/",
		repoUrl: "https://github.com/harvard-lil/h2o",
		image: "gallery-image-07.png",
	},
	{
		pk: 9,
		title: "Caselaw Colors",
		description: "What's the color of caselaw?",
		section: 2,
		order: 10,
		pageUrl:
			"https://museum.lil.tools/archive/caselaw-access-project/colors.html",
		repoUrl: "https://github.com/harvard-lil/colors",
		image: "gallery-image-09.png",
	},
	{
		pk: 10,
		title: "Journal Citator",
		description: "Journal Citator tool by King Xia (HLS, 2020).",
		section: 6,
		order: 4,
		pageUrl: "https://law-journals.herokuapp.com",
		repoUrl: "https://github.com/LeRoi/law_journal_citator",
		image: "gallery-image-10.png",
	},
	{
		pk: 11,
		title: "Telling Stories with CAP Data: The Prolific Mr. Cartwright",
		description:
			'John Bowers presents "my experience working with the Caselaw Access Project\u2019s publicly available Illinois dataset as evidence for a more optimistic narrative \u2013 namely that applying quantitative techniques to corpuses primarily associated with the qualitative disciplines can help us to uncover and relate stories which might otherwise go unnoticed."',
		section: 7,
		order: 9,
		pageUrl:
			"https://lil.law.harvard.edu/blog/2018/08/24/telling-stories-with-cap-data-the-prolific-mr-cartwright/",
		repoUrl: null,
		image: "gallery-image-11.png",
	},
	{
		pk: 12,
		title: "Caselaw Access Project Research Summit (Videos)",
		description:
			"In June 2019 we hosted the Caselaw Access Project Research Summit. Presentations by researchers have been made available in this playlist.",
		section: 1,
		order: 23,
		pageUrl:
			"https://www.youtube.com/playlist?list=PL5bjwZ2MwNlLK4F5a1BKPaDzW1ROU90M7",
		repoUrl: null,
		image: "gallery-image-12.png",
	},
	{
		pk: 13,
		title:
			"Improving Sentence Retrieval from Case Law for Statutory Interpretation",
		description:
			"Article by Jaromir Savelka, Huihui Xu, and Kevin D. Ashley, Proceedings of the Seventeenth International Conference on Artificial Intelligence and Law (ICAIL) (2019).",
		section: 1,
		order: 22,
		pageUrl: "https://dl.acm.org/doi/10.1145/3322640.3326736",
		repoUrl: null,
		image: "gallery-image-13.png",
	},
	{
		pk: 14,
		title: "Teaching Data Science for Lawyers with Caselaw Access Project Data",
		description:
			"Paul Gowder shares his work teaching data science to law students at the University of Iowa.",
		section: 4,
		order: 10,
		pageUrl:
			"https://lil.law.harvard.edu/blog/2019/07/09/teaching-data-science-for-lawyers-with-caselaw-access-project-data/",
		repoUrl: null,
		image: "gallery-image-14.png",
	},
	{
		pk: 15,
		title:
			"Boston Desegregation Archive: Annotated Case Law and Digital Reference Prototype",
		description:
			'"This is a prototype interface designed for the Boston Desegregation Archive: Annotated Case Law and Digital Reference project, a collaboration between the Boston Research Center, University Libraries, and NuLawLab at Northeastern University."',
		section: 6,
		order: 1,
		pageUrl:
			"https://bostonresearchcenter.org/projects_files/nulawlab/cap/index.html",
		repoUrl: null,
		image: "gallery-image-15.png",
	},
	{
		pk: 16,
		title: "Do Elected and Appointed Judges Write Opinions Differently?",
		description:
			"Michael Nelson and Steven Morgan at Pennsylvania State University summarize their research using CAP data.",
		section: 7,
		order: 5,
		pageUrl: "https://lil.law.harvard.edu/blog/2019/09/17/nelson-guest/",
		repoUrl: null,
		image: "gallery-image-16.png",
	},
	{
		pk: 17,
		title: "CAP Code Share: Get Opinion Author",
		description:
			"Learn how to get opinion authors from cases with the CAP API and CourtListener.",
		section: 5,
		order: 2,
		pageUrl:
			"https://lil.law.harvard.edu/blog/2019/08/26/cap-code-share-get-judges/",
		repoUrl:
			"https://github.com/harvard-lil/cap-examples/blob/master/get_judges/get_judges.ipynb",
		image: "gallery-image-17.png",
	},
	{
		pk: 18,
		title: "Tutorial: Retrieve Cases by Citation with the CAP Case Browser",
		description:
			"This tutorial shows how to retrieve a case by citation using the Caselaw Access Project's case browser.",
		section: 5,
		order: 5,
		pageUrl:
			"https://lil.law.harvard.edu/blog/2019/08/14/tutorial-retrieve-cases-by-citation-with-cap-case-browser/",
		repoUrl: null,
		image: "gallery-image-18.png",
	},
	{
		pk: 19,
		title: "Tutorial: Return Cases from 100 Years Ago Today with the CAP API",
		description:
			"This tutorial reviews how to return all cases decided 100 years ago today with the CAP API.",
		section: 5,
		order: 6,
		pageUrl:
			"https://lil.law.harvard.edu/blog/2019/08/05/tutorial-return-cases-from-100-years-ago-today-with-the-cap-api/",
		repoUrl: null,
		image: "gallery-image-19.png",
	},
	{
		pk: 20,
		title:
			"Tutorial: Creating a Data Analysis Workspace with Voyant and the CAP API",
		description:
			"This tutorial shares how to create a data analysis workspace with Voyant and the CAP API.",
		section: 5,
		order: 3,
		pageUrl:
			"https://lil.law.harvard.edu/blog/2019/10/03/creating-a-data-analysis-workspace-with-voyant-and-the-cap-api/",
		repoUrl: null,
		image: "gallery-image-20.png",
	},
	{
		pk: 21,
		title: "Constitution Annotated",
		description:
			"The Constitution Annotated by Library of Congress uses the CAP API	by linking to cases in footnotes and annotations.",
		section: 6,
		order: 3,
		pageUrl: "https://constitution.congress.gov",
		repoUrl: null,
		image: "gallery-image-21.png",
	},
	{
		pk: 22,
		title: "An Empirical Study of Statutory Interpretation in Tax Law",
		description: "Publication by Jonathan H. Choi, NYU Law Review (2020).",
		section: 1,
		order: 5,
		pageUrl: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3460962",
		repoUrl: null,
		image: "gallery-image-22.png",
	},
	{
		pk: 23,
		title: "CAP Code Share: Caselaw Access Project API to CSV",
		description:
			"Learn how to write case data from the Caselaw Access Project API to CSV.",
		section: 5,
		order: 1,
		pageUrl:
			"https://lil.law.harvard.edu/blog/2020/03/26/cap-code-share-caselaw-access-project-api-to-csv/",
		repoUrl:
			"https://github.com/harvard-lil/cap-examples/blob/master/api_to_csv/api_to_csv.py",
		image: "gallery-image-23.png",
	},
	{
		pk: 24,
		title:
			"Tracking semantic change in US Court opinions and Congress speeches",
		description:
			"Abdul Abdulrahim at the University of Oxford shares his experience using CAP data to see what language can tell us about ideological changes surrounding reproductive rights between the U.S. Supreme Court and Congress over time.",
		section: 7,
		order: 8,
		pageUrl:
			"https://lil.law.harvard.edu/blog/2019/11/14/guest-post-is-the-us-supreme-court-in-lockstep-with-congress-when-it-comes-to-abortion/",
		repoUrl: null,
		image: "gallery-image-24.png",
	},
	{
		pk: 25,
		title: "Creating a Case Recommendation System Using Gensim\u2019s Doc2Vec",
		description: "Case Recommendation System by Minna Fingerhood.",
		section: 7,
		order: 4,
		pageUrl:
			"https://lil.law.harvard.edu/blog/2019/10/22/guest-post-creating-a-case-recommendation-system-using-gensims-doc2vec/",
		repoUrl: "https://github.com/minnaf/Case_Recommendation_System",
		image: "gallery-image-25.png",
	},
	{
		pk: 26,
		title: "Caselaw Visualization Blog",
		description:
			"The Caselaw Visualization Blog by Jo\u00e3o Marinotti (HLS, 2020) shares data visualizations about U.S. caselaw using CAP data.",
		section: 7,
		order: 1,
		pageUrl: "https://visualizer.joaomarinotti.com/",
		repoUrl: null,
		image: "gallery-image-26.png",
	},
	{
		pk: 27,
		title: "BuzzyCite",
		description:
			"BuzzyCite is a third-party web application that uses the CAP API to help people search cases and create and save citations for use in documents.",
		section: 6,
		order: 5,
		pageUrl: "https://www.buzzycite.com/about",
		repoUrl: null,
		image: "gallery-image-27.png",
	},
	{
		pk: 28,
		title: "Data Science for Case Law",
		description:
			"This was a course collaboration from Harvard SEAS and Harvard Law School Library using data from CAP as part of Advanced Topics in Data Science (CS109b).",
		section: 4,
		order: 2,
		pageUrl:
			"https://lil.law.harvard.edu/blog/2020/05/29/data-science-for-case-law-a-course-collaboration/",
		repoUrl: null,
		image: "gallery-image-28.png",
	},
	{
		pk: 30,
		title: "Citing Slavery Project",
		description:
			'"The Citing Slavery Project provides a database of slave cases and the modern cases that continue to cite them as precedent."',
		section: 6,
		order: 2,
		pageUrl: "http://www.citingslavery.org/",
		repoUrl: null,
		image: "gallery-image-30.png",
	},
	{
		pk: 32,
		title: "Mining the Harvard Caselaw Access Project",
		description:
			"Essay by Felix B. Chang, Erin McCabe, Zhaowei Ren, Joshua Beckelhimer, and James Lee (2020).",
		section: 1,
		order: 7,
		pageUrl:
			"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3529257&dgcid=ejournal_htmlemail_antitrust:antitrust:law:policy:ejournal_abstractlink",
		repoUrl: null,
		image: "gallery-image-32.png",
	},
	{
		pk: 33,
		title: "Measuring the Antitrust Revolution",
		description:
			"Article by D. Daniel Sokol, Sara Bensley, and Maia Crook (2020).",
		section: 1,
		order: 6,
		pageUrl: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3620587",
		repoUrl: null,
		image: "gallery-image-33.png",
	},
	{
		pk: 36,
		title: "Rethinking Trademark Law\u2019s \u201cConsumer\u201d Label",
		description: "Publication by Dustin Marlan, Gonzaga Law Review (2020).",
		section: 1,
		order: 17,
		pageUrl:
			"https://gonzagalawreview.com/article/12286-rethinking-trademark-law-s-consumer-label",
		repoUrl: null,
	},
	{
		pk: 37,
		title:
			"The Argument that Cries \ud835\ude52\ud835\ude64\ud835\ude61\ud835\ude5b\ud835\ude5e\ud835\ude68\ud835\ude5d",
		description:
			"Original evidence demonstrating that the supposed demise of the presumption of innocence is empirically unjustified. Publication by Colin Starger, MIT Computational Law Report (2020).",
		section: 1,
		order: 10,
		pageUrl: "https://law.mit.edu/pub/theargumentcrieswolfish/release/2",
		repoUrl: null,
	},
	{
		pk: 38,
		title:
			"A Bootstrapping Approach for Semi-Automated Legal Knowledge Extraction and Enrichment",
		description:
			"Publication by Silvana Castano, Mattia Falduti, Alfio Ferrara, and Stefano Montanelli, Proceedings of the 28th Italian Symposium on Advanced Database Systems (2020).",
		section: 1,
		order: 11,
		pageUrl: "http://ceur-ws.org/Vol-2646/26-paper.pdf",
		repoUrl: null,
	},
	{
		pk: 39,
		title:
			"The Paradoxical Impact of Scalia's Campaign Against Legislative History",
		description:
			"Publication by Stuart Minor Benjamin and Kristen M. Renberg, Cornell Law Review (2020).",
		section: 1,
		order: 12,
		pageUrl:
			"https://www.cornelllawreview.org/2020/05/15/the-paradoxical-impact-of-scalias-campaign-against-legislative-history/",
		repoUrl: null,
	},
	{
		pk: 40,
		title:
			"Analyzing Vertical Mergers: Accounting for the Unilateral Effects Tradeoff and Thinking Holistically About Efficiencies",
		description:
			"Publication by Roger D. Blair, Christine S. Wilson, D. Daniel Sokol, Keith Klovers, and Jeremy Sandford, George Mason Law Review (2020).",
		section: 1,
		order: 8,
		pageUrl:
			"http://georgemasonlawreview.org/wp-content/uploads/2020/08/Blair_Ready_for_Web_829_1.pdf",
		repoUrl: null,
	},
	{
		pk: 41,
		title:
			"A Dataset for Statutory Reasoning in Tax Law Entailment and Question Answering",
		description:
			"Publication by Nils Holzenberger, Andrew Blair-Stanek, and Benjamin Van Durme, Proceedings of the Natural Legal Language Processing Workshop 2020 (2020).",
		section: 1,
		order: 9,
		pageUrl: "http://ceur-ws.org/Vol-2645/paper5.pdf",
		repoUrl: null,
	},
	{
		pk: 42,
		title: "LEGAL-BERT: The Muppets straight out of Law School",
		description:
			"Publication by Ilias Chalkidis, Manos Fergadiotis, Prodromos Malakasiotis, Nikolaos Aletras, and Ion Androutsopoulos (2020).",
		section: 1,
		order: 13,
		pageUrl: "https://arxiv.org/abs/2010.02559",
		repoUrl: null,
	},
	{
		pk: 43,
		title: "Extracting Outcomes from Appellate Decisions in US State Courts",
		description:
			"Publication by Alina Petrova, John Armour, and Thomas Lukasiewicz, 33rd International Conference on Legal Knowledge and Information Systems (JURIX) (2020).",
		section: 1,
		order: 18,
		pageUrl:
			"https://ora.ox.ac.uk/objects/uuid:dbcd5411-56e6-49c3-b0cd-3b71f391bd3c",
		repoUrl: null,
	},
	{
		pk: 44,
		title:
			"The LATO Knowledge Model for Automated Knowledge Extraction and Enrichment from Court Decisions Corpora",
		description:
			'Publication by Silvana Castano, Mattia Falduti, Alfio Ferrara, and Stefano Montanelli, Proceedings of the First International Workshop "CAiSE for Legal Documents" (COUrT 2020) (2020).',
		section: 1,
		order: 21,
		pageUrl: "http://ceur-ws.org/Vol-2690/COUrT-paper2.pdf",
		repoUrl: null,
	},
	{
		pk: 45,
		title:
			"A Statistical Test for Legal Interpretation: Theory and Applications",
		description: "Article by Julian Nyarko and Sarath Sanga (2020).",
		section: 1,
		order: 20,
		pageUrl:
			"https://juliannyarko.com/wp-content/uploads/other/nyarko_sanga_legal_interpretation.pdf",
		repoUrl: null,
	},
	{
		pk: 46,
		title: "Experimental Jurisprudence",
		description: "Essay by Kevin P. Tobia (2020).",
		section: 1,
		order: 19,
		pageUrl: "https://ssrn.com/abstract=3680107",
		repoUrl: null,
	},
	{
		pk: 47,
		title:
			"Contractual Allocation of Risks in Times of Crises: Computational and Normative Analyses of Force Majeure Clauses",
		description: "Article by Farshad Ghodoosi (2020).",
		section: 1,
		order: 20,
		pageUrl: "https://ssrn.com/abstract=3743033",
		repoUrl: null,
	},
	{
		pk: 48,
		title: "Learning to Rank Sentences for Explaining Statutory Terms",
		description:
			"Article by Jaromir Savelka and Kevin D. Ashley, Proceedings of ASAIL 2020.",
		section: 1,
		order: 15,
		pageUrl: "http://ceur-ws.org/Vol-2764/paper7.pdf",
		repoUrl: null,
	},
	{
		pk: 49,
		title:
			"Toward Grad-CAM Based Explainability in a Legal Text Processing Pipeline",
		description:
			"Article by \u0141ukasz G\u00f3rski, Shashishekar Ramakrishna, and J\u0119drzej Nowosielski, 33rd International Conference on Legal Knowledge and Information Systems (JURIX) (2020).",
		section: 1,
		order: 16,
		pageUrl: "https://arxiv.org/abs/2012.09603",
		repoUrl: null,
	},
	{
		pk: 50,
		title: "Fastlaw",
		description:
			'"Fastlaw is a law-specific word embedding model trained on a large corpus of law-related text data provided by the Caselaw Access Project (CAP)."',
		section: 6,
		order: 10,
		pageUrl: "https://github.com/jbesomi/fastlaw",
		repoUrl: null,
	},
	{
		pk: 51,
		title:
			"Quantifying Economic Reasoning in Court: Judge Economics Sophistication and Pro-business Orientation",
		description: "Article by Siying Cao (2020).",
		section: 1,
		order: 19,
		pageUrl:
			"https://www.econ.cuhk.edu.hk/econ/images/content/news_event/seminars/2020-21_2ndTerm/JMP_CaoSiying.pdf",
		repoUrl: null,
	},
	{
		pk: 52,
		title: "A Law School Course in Applied Legal Analytics and AI",
		description:
			"This article by Kevin Ashley, Jaromir Savelka, and Matthias Grabmair shares an overview of the course Applied Legal Analytics and AI at University of Pittsburgh School of Law (2020).",
		section: 4,
		order: 10,
		pageUrl:
			"https://journals.latrobe.edu.au/index.php/law-in-context/article/view/125",
		repoUrl: null,
	},
	{
		pk: 53,
		title:
			"Law and Data Science: Knowledge Modeling and Extraction from Court Decisions",
		description: "Thesis by Mattia Falduti (2021).",
		section: 1,
		order: 3,
		pageUrl: "https://air.unimi.it/handle/2434/799875#.YBBQqpNKiAI",
		repoUrl: null,
	},
	{
		pk: 54,
		title: "Download Search Results as Dataset",
		description:
			"This blog post shows how to download CAP search results as a dataset in JSON and CSV.",
		section: 5,
		order: 4,
		pageUrl:
			"https://lil.law.harvard.edu/blog/2021/02/08/search-update-download-search-results-as-dataset/",
		repoUrl: null,
	},
	{
		pk: 55,
		title:
			"Comparing the Performance of NLP Toolkits and Evaluation measures in Legal Tech",
		description: "Thesis by Muhammad Zohaib Khan (2021).",
		section: 1,
		order: 4,
		pageUrl: "https://arxiv.org/abs/2103.11792",
		repoUrl: null,
	},
	{
		pk: 56,
		title: "Citing Slavery",
		description: "Publication by Justin Simard, Stanford Law Review (2020).",
		section: 1,
		order: 21,
		pageUrl:
			"https://review.law.stanford.edu/wp-content/uploads/sites/3/2020/01/Simard-72-Stan.-L.-Rev.-79.pdf",
		repoUrl: null,
	},
	{
		pk: 57,
		title:
			"When Does Pretraining Help? Assessing Self-Supervised Learning for Law and the CaseHOLD Dataset",
		description:
			"Article by Lucia Zheng, Neel Guha, Brandon R. Anderson, Peter Henderson, and Daniel E. Ho, 18th International Conference on Artificial Intelligence and Law (ICAIL 2021), (2021).",
		section: 1,
		order: 2,
		pageUrl: "https://arxiv.org/abs/2104.08671",
		repoUrl: null,
	},
	{
		pk: 58,
		title: "Contracting in the Age of Smart Contracts",
		description: "Article by Farshad Ghodoosi, Washington Law Review (2021).",
		section: 1,
		order: 2,
		pageUrl: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3449674",
		repoUrl: null,
	},
	{
		pk: 59,
		title: "CiteURL",
		description:
			'"CiteURL is an extensible tool to process long and shortform legal citations in text and generate links to various websites where you can view the cited language for free."',
		section: 6,
		order: 10,
		pageUrl: "https://raindrum.github.io/citeurl/",
		repoUrl: "https://github.com/raindrum/citeurl/",
		image: "gallery-image-59.png",
	},
	{
		pk: 60,
		title:
			"Evaluating Document Representations for Content-based Legal Literature Recommendations",
		description:
			"Article by Malte Ostendorff, Elliott Ash, Terry Ruas, Bela Gipp, Julian Moreno-Schneider, Georg Rehm, Proceedings of the 18th International Conference on Artificial Intelligence and Law (ICAIL 2021), (2021).",
		section: 1,
		order: 2,
		pageUrl: "https://arxiv.org/abs/2104.13841",
		repoUrl: "https://github.com/malteos/legal-document-similarity/",
	},
	{
		pk: 61,
		title: "Is the Word 'Consumer' Biasing Trademark Law?",
		description: "Article by Dustin Marlan, Texas A&M Law Review (2021).",
		section: 1,
		order: 2,
		pageUrl: "https://scholarship.law.tamu.edu/lawreview/vol8/iss2/4/",
		repoUrl: null,
	},
	{
		pk: 62,
		title: "Statutory Interpretation from the Outside",
		description:
			"Article by Kevin Tobia, Brian G. Slocum, and Victoria Nourse, Columbia Law Review (Forthcoming) (2021).",
		section: 1,
		order: 2,
		pageUrl: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3786090",
		repoUrl: null,
	},
	{
		pk: 63,
		title:
			'"Our Most Sacred Legal Commitments": A Digital Exploration of the U.S. Supreme Court Defining Who We Are and How They Should Opine',
		description:
			"Article by Eric C. Nystrom and David S. Tannenhaus, University of Cincinnati Law Review, (2021).",
		section: 1,
		order: 2,
		pageUrl: "https://scholarship.law.uc.edu/uclr/vol89/iss4/2/",
		repoUrl: null,
	},
	{
		pk: 64,
		title: "captools",
		description:
			'Captools by Eric Nystrom is a "toolkit for legal historians to work with bulk data from the Caselaw Access Project (CAP)".',
		section: 6,
		order: 10,
		pageUrl: null,
		repoUrl: "https://github.com/ericnystrom/captools",
	},
	{
		pk: 65,
		title: "Context-Aware Legal Citation Recommendation using Deep Learning",
		description:
			"Article by Zihan Huang, Charles Low, Mengqiu Teng, Hongyi Zhang, Daniel E. Ho, Mark S. Krass, and Matthias Grabmair, 18th International Conference on Artificial Intelligence and the Law (ICAIL 2021), 2021.",
		section: 1,
		order: 3,
		pageUrl: "https://arxiv.org/abs/2106.10776",
		repoUrl: null,
	},
	{
		pk: 66,
		title: "Legal Tech, Civil Procedure, and the Future of Adversarialism",
		description:
			"Article by David Freeman Engstrom and Jonah B. Gelbach, University of Pennsylvania Law Review (forthcoming)",
		section: 1,
		order: 10,
		pageUrl: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3551589",
		repoUrl: null,
	},
	{
		pk: 67,
		title: "Experimental Jurisprudence",
		description:
			"Article by Kevin Tobia, 89 University of Chicago Law Review (2022, Forthcoming)",
		section: 1,
		order: 10,
		pageUrl: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3680107",
		repoUrl: null,
	},
	{
		pk: 68,
		title:
			"Improved Induction of Narrative Chains via Cross-Document Relations",
		description:
			"Article by Andrew Blair-Stanek and Benjamin Van Durme, Proceedings of the 11th Joint Conference on Lexical and Computational Semantics, July 14-15, 2022",
		section: 1,
		order: 2,
		pageUrl: "https://aclanthology.org/2022.starsem-1.18.pdf",
		repoUrl: null,
	},
	{
		pk: 69,
		title:
			"Modeling the Caselaw Access Project: Lessons for Market Power and the Antitrust-Regulation Balance",
		description:
			"Article by Felix B. Chang, Erin McCabe, and James Lee, 22 Nevada Law Journal (2022)",
		section: 1,
		order: 1,
		pageUrl:
			"https://scholars.law.unlv.edu/cgi/viewcontent.cgi?article=1883&context=nlj",
		repoUrl: null,
	},
	{
		pk: 70,
		title: "Certiorari in Important Cases",
		description:
			"Article by Tejas N. Narechania, 122 Columbia Law Review 923 (2022)",
		section: 1,
		order: 10,
		pageUrl: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3931162",
		repoUrl: null,
	},
	{
		pk: 71,
		title: "AI for Tax Analogies and Code Renumbering",
		description:
			"Article by Andrew Blair-Stanek and Benjamin Van Durme, 170 TAX NOTES FEDERAL 1997 (MAR. 29, 2021)",
		section: 1,
		order: 10,
		pageUrl: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3850796",
		repoUrl: null,
	},
	{
		pk: 72,
		title: "The Economics of Litigation Finance",
		description:
			"Article by Sandro Claudio Lera, Robert Mahari, and Moris Simon Strub (2022)",
		section: 1,
		order: 10,
		pageUrl: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4091716",
		repoUrl: null,
	},
	{
		pk: 73,
		title:
			"AutoLAW: Augmented Legal Reasoning through Legal Precedent Prediction",
		description: "Article by Robert Zev Mahari (2021)",
		section: 1,
		order: 10,
		pageUrl: "https://arxiv.org/abs/2106.16034",
		repoUrl: null,
	},
	{
		pk: 74,
		title:
			"Named Entity Recognition in Historic Legal Text: A Transformer and State Machine Ensemble Method",
		description:
			"Article by Fernando Trias, Hongming Wang, Sylvain Jaume, and Stratos Idreos, Natural Legal Language Processing Workshop 2021",
		section: 1,
		order: 10,
		pageUrl: "https://aclanthology.org/2021.nllp-1.18.pdf",
		repoUrl: null,
	},
	{
		pk: 75,
		title:
			"SALKG: A Semantic Annotation System for Building a High-quality Legal Knowledge Graph",
		description:
			"Article by Mingwei Tang, Cui Su, Haihua Chen, Jingye Qu, and Junhua Ding, 2020 IEEE International Conference on Big Data",
		section: 1,
		order: 10,
		pageUrl:
			"https://ieeexplore.ieee.org/abstract/document/9378107/authors#authors",
		repoUrl: null,
	},
	{
		pk: 76,
		title:
			"A knowledge-centered framework for exploration and retrieval of legal documents",
		description:
			"Article by Silvana Castano, Mattia Falduti, Alfio Ferrara, Stefano Montanelli, Information Systems\nVolume 106, May 2022",
		section: 1,
		order: 10,
		pageUrl:
			"https://www.sciencedirect.com/science/article/abs/pii/S0306437921000788",
		repoUrl: null,
	},
	{
		pk: 77,
		title:
			"Construction and Evaluation of a High-Quality Corpus for Legal Intelligence Using Semiautomated Approaches",
		description:
			"Article by Haihua Chen, Lavinia F. Pieptea, Junhua Ding, IEEE Transactions on Reliability (Volume: 71, Issue: 2, June 2022)",
		section: 1,
		order: 10,
		pageUrl: "https://ieeexplore.ieee.org/document/9741798/authors#authors",
		repoUrl: null,
	},
	{
		pk: 78,
		title: "Sexism in the Judiciary: Bias Definition in NLP and in Our Courts",
		description:
			"Article by Noa Baker Gillis, Proceedings of the 3rd Workshop on Gender Bias in Natural Language Processing, August 5, 2021",
		section: 1,
		order: 10,
		pageUrl: "https://aclanthology.org/2021.gebnlp-1.6.pdf",
		repoUrl: null,
	},
];
