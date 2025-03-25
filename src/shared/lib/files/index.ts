export const downloadFile = async (url: string, filename: string) => {
    const res = await fetch(url);
    const blob = await res.blob();
    const a = document.createElement('a');
    const objectURL = URL.createObjectURL(blob);

    a.href = objectURL;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(objectURL); // чистим память
};
