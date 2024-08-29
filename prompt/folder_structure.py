import os
import sys
import argparse
from pathlib import Path

def generate_folder_structure(root_path, output_file, ignore_list=None):
    if ignore_list is None:
        ignore_list = ['.git', '.vscode', '__pycache__', 'node_modules']

    root_path = Path(root_path).resolve()
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(f"# Folder Structure: {root_path.name}\n\n")
        f.write(f"- {root_path.name}/\n")
        for root, dirs, files in os.walk(root_path):
            dirs.sort()
            files.sort()
            level = Path(root).relative_to(root_path).parts
            indent = '  ' * (len(level) + 1)
            
            # Skip ignored directories
            dirs[:] = [d for d in dirs if d not in ignore_list]
            
            for dir in dirs:
                f.write(f"{indent}- {dir}/\n")
            for file in files:
                f.write(f"{indent}  - {file}\n")

def main():
    parser = argparse.ArgumentParser(description="Generate a folder structure in Markdown format.")
    parser.add_argument("folder_path", help="Path to the folder to analyze")
    parser.add_argument("-i", "--ignore", nargs='+', help="Additional folders to ignore", default=[])
    parser.add_argument("-o", "--output", help="Output file name (default: folder_structure.md)")
    
    args = parser.parse_args()

    folder_path = Path(args.folder_path)
    if not folder_path.exists() or not folder_path.is_dir():
        print(f"Error: The specified path '{args.folder_path}' does not exist or is not a directory.")
        sys.exit(1)

    output_file = args.output if args.output else "folder_structure.md"
    ignore_list = ['.git', '.vscode', '__pycache__', 'node_modules'] + args.ignore

    generate_folder_structure(folder_path, output_file, ignore_list)
    print(f"Folder structure has been written to {output_file}")

if __name__ == "__main__":
    main()