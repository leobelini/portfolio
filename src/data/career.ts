export const startCareer = 2015;

export const getExperienceYears = (now = new Date()) => now.getFullYear() - startCareer;

// valor inicial (build); o navegador recalcula com a data atual
export const experienceYears = getExperienceYears();
