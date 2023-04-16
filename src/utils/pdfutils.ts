import fs from 'fs';
import path from 'path';

export const getFilesRecursively = (dir: string): string[] => {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  const files = dirents
    .filter((dirent) => !dirent.isDirectory())
    .map((dirent) => path.join(dir, dirent.name));
  const folders = dirents.filter((dirent) => dirent.isDirectory());
  const nestedFiles = folders.flatMap((folder) =>
    getFilesRecursively(path.join(dir, folder.name))
  );
  return [...files, ...nestedFiles];
};
