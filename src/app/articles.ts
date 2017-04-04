export class Articles {
    id: number;
    title: string;
    author: string;
    status: string;
    date: string;
    region: string;
    country: string;
    tags: string;
    hasComments: boolean;
    intro: string;
    body: [
        {overview: Array<string>, findings: Array<string>, recommendations: Array<string>}
    ];
    datasets: [
        {source: string, link: string, strengths: string, weaknesses: string, rating: number}
    ];
    graphics: [
        {caption: string, path: string}
    ];
}