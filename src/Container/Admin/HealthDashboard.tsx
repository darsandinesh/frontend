import { useState, useEffect } from "react";
import AppCard from "../../components/AppCard";

const ServiceHealthCard = ({ name, url }: { name: string; url: string }) => {
    // Mocking health check logic
    const [status, setStatus] = useState<"healthy" | "unhealthy" | "checking">("checking");
    const [latency, setLatency] = useState<number>(0);

    useEffect(() => {
        const checkHealth = () => {
            setStatus("checking");
            // Simulate network delay
            const delay = Math.floor(Math.random() * 500) + 50;

            setTimeout(() => {
                setLatency(delay);
                // Simulate occasional failure for demo purposes (10% chance)
                // In production, this would fetch(url)
                const isHealthy = Math.random() > 0.05;
                setStatus(isHealthy ? "healthy" : "unhealthy");
            }, 1000);
        };

        checkHealth();
        const interval = setInterval(checkHealth, 30000); // Check every 30s
        return () => clearInterval(interval);
    }, [url]);

    return (
        <AppCard className={`relative overflow-hidden border-l-4 transition-all duration-300 ${status === "healthy" ? "border-green-500" : status === "unhealthy" ? "border-red-500" : "border-gray-300"
            }`}>
            <div className="flex justify-between items-start relative z-10">
                <div>
                    <h3 className="text-gray-500 font-bold text-sm uppercase tracking-wider mb-2">{name}</h3>
                    <div className="flex items-center">
                        {status === "checking" && (
                            <span className="flex h-3 w-3 relative mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-500"></span>
                            </span>
                        )}
                        {status === "healthy" && (
                            <span className="flex h-3 w-3 relative mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                        )}
                        {status === "unhealthy" && (
                            <span className="flex h-3 w-3 relative mr-2">
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                        )}

                        <span className={`text-xl font-bold ${status === "healthy" ? "text-green-600" : status === "unhealthy" ? "text-red-600" : "text-gray-600"
                            }`}>
                            {status === "checking" ? "Checking..." : status === "healthy" ? "Healthy" : "Unhealthy"}
                        </span>
                    </div>
                </div>
                <div className="text-right">
                    <span className="material-icons-outlined text-gray-300 text-4xl">
                        {name.includes("auth") ? "vpn_key" : name.includes("notif") ? "notifications" : name.includes("comm") ? "chat" : "router"}
                    </span>
                </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                <span>{url}</span>
                <span>{status === "checking" ? "--" : `${latency}ms`}</span>
            </div>

            {/* Background Decoration */}
            <div className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-5 ${status === "healthy" ? "bg-green-500" : status === "unhealthy" ? "bg-red-500" : "bg-gray-500"
                }`}></div>
        </AppCard>
    );
};

const HealthDashboard = () => {
    const services = [
        { name: "agrilink-api-gateway", url: "/api/health" },
        { name: "auth-service", url: "/auth/health" },
        { name: "communication-service", url: "/comm/health" },
        { name: "notification-service", url: "/notif/health" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-end">
                <button className="flex items-center text-sm text-purple-600 hover:text-purple-700 font-medium">
                    <span className="material-icons-outlined mr-1 text-lg">refresh</span>
                    Refresh All
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service) => (
                    <ServiceHealthCard key={service.name} {...service} />
                ))}
            </div>

            <AppCard>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-800">System Logs</h3>
                    <div className="flex gap-2">
                        <span className="px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-700">Errors: 0</span>
                        <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-700">Warnings: 1</span>
                    </div>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs text-green-400 h-64 overflow-y-auto">
                    <p>[INFO] 2023-12-15 10:00:01 - Server started port 3000</p>
                    <p>[INFO] 2023-12-15 10:05:22 - DB Connection established</p>
                    <p>[INFO] 2023-12-15 10:15:00 - Scheduled cron job started</p>
                    <p>[WARN] 2023-12-15 11:20:15 - High memory usage detected</p>
                    <p className="text-blue-400">[DEBUG] 2023-12-15 11:20:16 - Dumping heap profile...</p>
                    <p>[INFO] 2023-12-15 11:25:00 - Cache cleared</p>
                    <p>[INFO] 2023-12-15 12:00:00 - User backup completed</p>
                    <p>[INFO] 2023-12-15 12:45:10 - API Gateway latency normal</p>
                </div>
            </AppCard>
        </div>
    );
};

export default HealthDashboard;
