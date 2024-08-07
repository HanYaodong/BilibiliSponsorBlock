export function partition<T>(array: T[], filter: (element: T) => boolean): [T[], T[]] {
    const pass = [];
    const fail = [];
    array.forEach((element) => (filter(element) ? pass : fail).push(element));

    return [pass, fail];
}
