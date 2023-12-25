import queryString from 'query-string';

export const getParseQuerystring = (value: string) => {
    return queryString.parse(value, {arrayFormat: 'bracket-separator', arrayFormatSeparator: ','});
}

// export const getStringifyQuerystring = (value: object) => {
//     const query: Record<string, unknown> = {};
//     Object.keys(value).map((key) => {
//         if (Array.isArray(value[key])) {
//             if (value[key].length !== 0) {
//                 query[key] = value[key];
//             }
//         } else {
//             if (value[key] !== undefined && value[key] !== null && value[key] !== '') {
//                 query[key] = value[key];
//             }
//         }
//     });
//
//     return `${queryString.stringify(query, {
//         arrayFormat: 'bracket-separator',
//         arrayFormatSeparator: ',',
//         skipNull: true,
//         skipEmptyString: true
//     })}`;
// };