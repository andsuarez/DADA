import { Articles } from './articles';

export const ARTICLES: Articles[] = [
    {
        id: 1,
        title: "Typhoon Melor Threatens to Bring Wind Damage and Flooding to the Philippines",
        author: "John Doe",
        status: "Draft",
        date: "27 March 2017",
        region: "ALE/EAP",
        country: "Philippines",
        tags: "Typhoon | Impact",
        hasComments: true,
        intro: "New data shows torrential rainfall, rising floodwaters and high wind from Typhoon Melor are threatening people, infrastructure and assets in six central provinces. USAID/OFDA should prepare internal teams for a shelter-focused response. Find key internal/external datasets and lessons learned in this analysis article.",
        body: [{
            overview: [
                'Torrential rainfall has affected many regions due to Melor’s slow forward speed. In Oriental Mindoro, water is waist-high and still rising, trapping residents in their homes.',
                'Melor has left a trail of damage and disruption across the northern and central Philippines just prior to the traditional nine-day Christmas vigil that is held in the country. Six central provinces have been severely affected with damage to buildings, agriculture, and infrastructure. Approximately 720,000 people were evacuated in Bicol Province in advance of Melor’s first landfall and the entire province of more than one million is without power. The evacuations are credited with a low number of fatalities; however, three deaths occurred in Northern Samar Province due to flooding, and another occurred in Northern Samar from flying debris. Power outages also occurred in Bulan and the surrounding areas.',
                'Heavy winds and rainfall will continue to impact several areas of the central Philippines for a few days. Manila has been affected by winds reaching approximately 60 km/h and is expected to be impacted by heavy rainfall of up to 300 mm.',
                'USAID/OFDA Regional Advisors are in position to be in the affected areas to being conducting assessments within 24 hours.'
            ],
            findings: [
                'In the Philippines, lighter materials—such as wood frame with galvanized iron or aluminum roofs—are often used for residential buildings in rural areas. In contrast, urban residential structures are generally made of concrete block with metal roofs, although hollow concrete is also used. Masonry residences and high-rise apartments of steel construction can also be found in the cities. Masonry is often used for smaller commercial establishments although the majority of all commercial and industrial buildings are reinforced concrete or steel. Building codes are not strictly enforced.',
                'Buildings will respond differently to wind loads, depending upon their construction, height, and occupancy. The duration of damaging winds will also impact potential losses. Strong winds may peel back or blow off galvanized iron roofs and down trees and wooden utility poles, exposing live wires and causing power outages.',
                'Landslides and flash floods could cause significant water and structural damage. Flooding is much more damaging to the lower floors of multi-story buildings, making the commercial establishments on the first floor of many apartment buildings in the Philippines vulnerable to the flood conditions expected from Typhoon Melor.'
            ],
            recommendations: [
                'USAID/OFDA should prepare its internal teams and key partners for a shelter focused response. Other likely needs include NFIs.',
                'Link in lessons learned from previous USAID/OFDA disaster response operations in the Philippines and build response upon significant DRR programming completed (and underway). Specific DRR projects to reference include: Philippines Emergency Shelter Project (Luzon 2012).'
            ]
        }],
        datasets: [
            {
                source: 'NOAA',
                link: 'http://www.goes.noaa.gov/sohemi/sohemiloops/shphil.html',
                strengths: 'Real time',
                weaknesses: 'Not directly linked to additional analysis',
                rating: 3
            },
            {
                source: 'PAGASA',
                link: 'http://www1.pagasa.dost.gov.ph/index.php/2-uncategorised/2700-radars#aparri',
                strengths: 'National analysis center radar feed, good to cite for analysis',
                weaknesses: 'Limited additional value on NOAA data sources',
                rating: 1
            }
        ],
        graphics: [
            {
                caption: 'Humanitarian implications analysis (multiple data sources)',
                path: '../assets/img/id1img1.png'
            }
        ]
    },
    {
        id: 2,
        title: "New Incidents of Armed Violence and Underlying Humanitarian Risk in Burkina Faso",
        author: "Jane Doe",
        status: "Draft",
        date: "27 March 2017",
        region: "Africa",
        country: "Burkina Faso",
        tags: "Hazard | Vulnerability | Risk",
        hasComments: false,
        intro: "Fresh incident data show a deteriorating security situation overlaid with confirmed existing high levels of humanitarian risk in Burkina Faso’s northern provinces.  Primary USAID/OFDA assessment may be required if current trends continue to worsen. Find key internal/external datasets, risk analysis and dataset comparisons in this analysis article.",
        body: [{
            overview: [
                'The security situation in Northern Burkina Faso worsened since January 2017 showing the increasing influence of regional instability on this previously stable area.',
                'Partners are reporting that the Ansarul Islam group, which has links to the Ansar Dine movement in Mali, is suspected to be behind most of the recent attacks but specific perpetrators are unknown at this time.',
                'Partner reports indicate that the heightened instability has caused fear across the region and led to the closure of over 600 schools in Oudalan and Soum provinces.',
                'Recent violence is also impacting access to other social services such as health, food security and protection.'
            ],
            findings: [
                'New data from Burkina Faso indicates a significant deterioration of security in northern regions in line with trends across the sub region.',
                'These regions are already classified as high and very high humanitarian risk so additional instability could increase humanitarian need within the next three months.',
                'Natural disaster datasets show frequent flooding in Burkina Faso that adds an additional layer of stress to already vulnerable populations.',
                'While regional violence in the Sahel is falling in the past 5 years, humanitarian need remains high and the recent incidents in northern Burkina Faso are steadily decreasing.'
            ],
            recommendations: [
                'Continue to monitor new datasets from Burkina Faso and the sub region to increase preparedness for northern regions.',
                'Contact and collaborate with technical specialist USG counterparts in Burkina (OTI, US Embassy, OFDA regional office in Dakar) to conduct additional data sharing and analysis.',
                'Prepare for an OFDA assessment mission to the region if security and humanitarian trends continue to deteriorate.'
            ]
        }],
        datasets: [
            {
                source: 'ACLED',
                link: 'http://www.crisis.acleddata.com/category/burkina-faso/',
                strengths: 'Long term dataset with multiple relevant categories',
                weaknesses: 'Separate incidents not verified by a third party',
                rating: 4
            },
            {
                source: 'INFORM',
                link: 'http://www.inform-index.org/Subnational/Sahel',
                strengths: '',
                weaknesses: '',
                rating: 4
            },
            {
                source: 'IOM ',
                link: 'https://www.iom.int/countries/burkina-faso',
                strengths: 'Year-to-year data on refugee/migrant inflows and outflows to help verify total population',
                weaknesses: 'Not useful for local-level planning',
                rating: 5
            },
            {
                source: 'OFDA',
                link: 'https://www.usaid.gov/who-we-are/organization/bureaus/bureau-democracy-conflict-and-humanitarian-assistance/office-us',
                strengths: 'Vetted numbers',
                weaknesses: 'Available data is of variable quality',
                rating: 2
            }
        ],
        graphics: [
            {
                caption: 'Recent uptick in security events in Burkina (ACLED data visualization)',
                path: '/assets/img/id2img1.png'
            },
            {
                caption: 'Recent events in a regional context (ACLED data visualization)',
                path: '/assets/img/id2img2.png'
            },
            {
                caption: 'Regional humanitarian risk in context showing humanitarian risk in Burkina and the region (INFORM Sahel)',
                path: '/assets/img/id2img3.png'
            }
        ]
    },
    {
        id: 3,
        title: "Yemen Population Data Is Highly Problematic",
        author: "Howard Sterling",
        status: "Draft",
        date: "27 March 2017",
        region: "MECHR",
        country: "Yemen",
        tags: "Demographics",
        hasComments: true,
        intro: "Lack of reliable population data in Yemen is a major impediment to humanitarian programing. This article discusses the strengths and weaknesses of various sources and help USAID/OFDA teams assemble the best possible estimates.",
        body: [{
            overview: [
                'The lack of reliable population data for Yemen is a major impediment to designing and delivering targeted humanitarian assistance. ',
                'The last full census for Yemen is not publicly available and was conducted in 2004. Yemen’s central statistics organization no longer has an active website. The UN humanitarian interagency Common Operational Datasets (CODs) for Yemen do not currently include any sub-national population data.',
                'USAID/OFDA must triangulate available secondary data from multiple sources to project approximate population data that can be used to better target beneficiaries and ensure adequate coverage.'
            ],
            findings: [
                'Population data in Yemen is of low reliability given the age of existing datasets and population movements since the outbreak of the recent round of fighting.',
                'The most reliable data comes from UNHCR and IOM displacement figures with their understandable focus on displacement rather than host populations.'
            ],
            recommendations: [
                'USAID/OFDA cannot rely upon existing government population data. Instead, the DADA project should be engaged to develop a triangulated population estimates based on partner and secondary data provided.',
                'Although a valuable dataset, scarce resources dictate reliance on new emergency assessments in support of operations rather than advocacy for baseline population assessment at this time.',
                'USAID/OFDA staff should use their discretion to allow a lower level of supporting population data for projects outside of camp or camp-like environments, to ensure that bias towards information availability does not distort the overall response.'
            ]
        }],
        datasets: [
            {
                source: 'WorldPop',
                link: 'https://data.humdata.org/dataset/worldpop-yemen-population',
                strengths: 'Country-wide coverage. Detailed local coverage (100m resolution)',
                weaknesses: 'From 2010. Indirect, based on satellite imagery. No sex-and-age disaggregation possible',
                rating: 2
            },
            {
                source: 'IOM DTM',
                link: 'https://data.humdata.org/dataset/yemen-iom-dtm-dataset-april-2016',
                strengths: 'More-recent (2016). Based on human counting. Includes sex and age disaggregation',
                weaknesses: 'Covers only places where IDPs congregate; not a national-level baseline',
                rating: 4
            },
            {
                source: 'UNHCR PopStats',
                link: 'https://data.humdata.org/dataset/refugees-originating-yem',
                strengths: 'Year-to-year data on refugee/migrant inflows and outflows to help verify total population',
                weaknesses: 'Not useful for local-level planning',
                rating: 5
            },
            {
                source: 'OFDA',
                link: 'https://www.usaid.gov/who-we-are/organization/bureaus/bureau-democracy-conflict-and-humanitarian-assistance/office-us',
                strengths: 'Vetted numbers',
                weaknesses: 'Available data is of variable quality',
                rating: 2
            }
        ],
        graphics: [
            {
                caption: '',
                path: '../assets/img/id3img1.png'
            }
        ]
    }
];