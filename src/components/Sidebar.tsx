type SidebarProps = {
    files: string[];
    onSelect: (filename: string) => void;
};

export default function Sidebar({ files, onSelect }: SidebarProps) {
    return (
        <ul className="w-64 bg-gray-100 p-4">
            {files.map((filename, idx) => (
                <li key={idx}>
                    <button
                        className="text-left w-full hover:bg-gray-200 p-2"
                        onClick={() => onSelect(filename)}
                    >
                        {filename.replace(/\.md$/, '').replace(/-/g, ' ')}
                    </button>
                </li>
            ))}
        </ul>
    );
}