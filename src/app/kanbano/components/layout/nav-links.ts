export interface NavLink {
    readonly label: string;
    readonly fragment: string;
}

export const NAV_LINKS: readonly NavLink[] = [
    { label: "Fonctionnalités", fragment: "fonctionnalites" },
    { label: "Prix", fragment: "prix" },
    { label: "Témoignages", fragment: "temoignages" },
    { label: "Protection des données", fragment: "protection" },
];
