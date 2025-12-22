export interface Organization {
    id: number;
    name: string;
    description: string;
    causes: string[];
    website: string;
    imageUrl: string;
    tags: string[];
    section18a: boolean;
    type: 'NPO' | 'Business' | 'Social Enterprise';
}
