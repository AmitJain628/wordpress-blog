export interface IMenu {
    name: string;
    ID: string;
    slug: string;
    post_count: number;
}

export interface ITags {
    name: string;
    ID: string;
    slug: string;
}

export interface IPosts {
    name: string;
    id: string;
    thumbnail: string;
    url: string;
    time: string;
    categoryName: string;
}
