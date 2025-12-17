import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split("/").filter((x) => x);

    // Don't render on dashboard root if desired, or keep for consistency.
    // We'll filter out "admin" from valid crumbs for cleaner look.
    const breadcrumbs = pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
        return {
            name: segment.charAt(0).toUpperCase() + segment.slice(1),
            path,
            isLast: index === pathSegments.length - 1
        };
    }).filter(item => item.name !== "Admin");

    return (
        <nav className="flex items-center text-sm text-gray-500 mb-6">
            <Link to="/admin/dashboard" className="flex items-center hover:text-purple-600 transition-colors">
                <span className="material-icons-outlined text-lg mr-1">home</span>
                Home
            </Link>
            {breadcrumbs.map((crumb) => (
                <div key={crumb.path} className="flex items-center">
                    <span className="material-icons-outlined text-gray-400 mx-2 text-xs">chevron_right</span>
                    {crumb.isLast ? (
                        <span className="font-semibold text-gray-800 capitalize">{crumb.name}</span>
                    ) : (
                        <Link to={crumb.path} className="hover:text-purple-600 transition-colors capitalize">
                            {crumb.name}
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default Breadcrumbs;
