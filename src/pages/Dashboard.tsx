import React from 'react';
import { FiBook, FiEye, FiEdit, FiTrendingUp, FiUsers, FiCalendar, FiPlus } from 'react-icons/fi';

const Dashboard: React.FC = () => {
    // Static data for dashboard
    const stats = [
        {
            title: 'Total Blogs',
            value: '24',
            icon: FiBook,
            color: 'bg-[#10b981]',
            change: '+12%',
            changeType: 'positive',
        },
        {
            title: 'Total Views',
            value: '1,234',
            icon: FiEye,
            color: 'bg-[#10b981]',
            change: '+8%',
            changeType: 'positive',
        },
        {
            title: 'Published',
            value: '18',
            icon: FiEdit,
            color: 'bg-[#10b981]',
            change: '+5%',
            changeType: 'positive',
        },
        {
            title: 'Authors',
            value: '8',
            icon: FiUsers,
            color: 'bg-[#10b981]',
            change: '+2',
            changeType: 'positive',
        },
    ];

    const recentBlogs = [
        {
            id: '1',
            title: 'Getting Started with React',
            author: 'John Doe',
            views: 234,
            status: 'Published',
            date: '2024-01-15',
        },
        {
            id: '2',
            title: 'Advanced TypeScript Patterns',
            author: 'Jane Smith',
            views: 189,
            status: 'Published',
            date: '2024-01-14',
        },
        {
            id: '3',
            title: 'Building Scalable APIs',
            author: 'Mike Johnson',
            views: 156,
            status: 'Draft',
            date: '2024-01-13',
        },
        {
            id: '4',
            title: 'Modern CSS Techniques',
            author: 'Sarah Williams',
            views: 298,
            status: 'Published',
            date: '2024-01-12',
        },
    ];

    const topPerforming = [
        {
            title: 'Complete Guide to Next.js',
            views: 1245,
            engagement: '92%',
        },
        {
            title: 'Mastering React Hooks',
            views: 987,
            engagement: '88%',
        },
        {
            title: 'TypeScript Best Practices',
            views: 856,
            engagement: '85%',
        },
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your blog.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                                    <div className="flex items-center mt-2">
                                        <span
                                            className={`text-sm font-medium ${
                                                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                                            }`}
                                        >
                                            {stat.change}
                                        </span>
                                        <span className="text-sm text-gray-500 ml-1">vs last month</span>
                                    </div>
                                </div>
                                <div className={`${stat.color} p-3 rounded-lg`}>
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Charts and Tables Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Blogs */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-900">Recent Blogs</h2>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            {recentBlogs.map((blog) => (
                                <div
                                    key={blog.id}
                                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex-1">
                                        <h3 className="font-medium text-gray-900">{blog.title}</h3>
                                        <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                                            <span>{blog.author}</span>
                                            <span className="flex items-center">
                                                <FiEye className="w-4 h-4 mr-1" />
                                                {blog.views}
                                            </span>
                                            <span
                                                className={`px-2 py-1 rounded text-xs ${
                                                    blog.status === 'Published'
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-yellow-100 text-yellow-700'
                                                }`}
                                            >
                                                {blog.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-500 flex items-center">
                                        <FiCalendar className="w-4 h-4 mr-1" />
                                        {new Date(blog.date).toLocaleDateString()}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Top Performing */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-900">Top Performing</h2>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            {topPerforming.map((blog, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-[#10b981]/10 rounded-lg flex items-center justify-center">
                                            <span className="text-[#10b981] font-bold">#{index + 1}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900">{blog.title}</h3>
                                            <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                                                <span className="flex items-center">
                                                    <FiEye className="w-4 h-4 mr-1" />
                                                    {blog.views} views
                                                </span>
                                                <span className="flex items-center">
                                                    <FiTrendingUp className="w-4 h-4 mr-1" />
                                                    {blog.engagement} engagement
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                        <FiPlus className="w-5 h-5 text-[#10b981] mb-2" />
                        <h3 className="font-medium text-gray-900">Create New Blog</h3>
                        <p className="text-sm text-gray-500 mt-1">Start writing a new blog post</p>
                    </button>
                    <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                        <FiUsers className="w-5 h-5 text-[#10b981] mb-2" />
                        <h3 className="font-medium text-gray-900">Manage Authors</h3>
                        <p className="text-sm text-gray-500 mt-1">Add or edit author profiles</p>
                    </button>
                    <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                        <FiBook className="w-5 h-5 text-[#10b981] mb-2" />
                        <h3 className="font-medium text-gray-900">View All Blogs</h3>
                        <p className="text-sm text-gray-500 mt-1">Browse and manage all blogs</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

