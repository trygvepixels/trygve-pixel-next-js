// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import {
//   FiMenu,
//   FiSearch,
//   FiPlus,
//   FiUpload,
//   FiFileText,
//   FiGrid,
//   FiLogOut,
//   FiSettings,
//   FiChevronRight,
//   FiStar,
//   FiBriefcase,
// } from "react-icons/fi";
// import {
//   MdOutlineSpaceDashboard,
//   MdOutlineArticle,
//   MdOutlineCollectionsBookmark,
// } from "react-icons/md";

// const BRAND = {
//   primary: "#234D7E", // your blue
//   primaryDark: "#1D3F68",
//   primarySoft: "rgba(35,77,126,0.10)",
//   ink: "#0F1222",
// };

// export default function AdminDashboard() {
//   const [open, setOpen] = useState(false);

//   // dummy data for visuals — replace with real data when you connect
//   const stats = [
//     { label: "Total Blogs", value: "128", delta: "+6 this week" },
//     { label: "Projects", value: "54", delta: "+2 this week" },
//     { label: "Drafts", value: "9", delta: "—" },
//     { label: "Pending Reviews", value: "3", delta: "action needed" },
//   ];

//   const recentBlogs = [
//     { title: "Design Systems That Scale", status: "Published", date: "Aug 13" },
//     { title: "SEO Basics for 2025", status: "Draft", date: "Aug 11" },
//     { title: "Faster Next.js Images", status: "Published", date: "Aug 08" },
//   ];

//   const recentProjects = [
//     { title: "Aurora Homes", status: "Live", date: "Aug 12" },
//     { title: "Cafe Botanica", status: "In Review", date: "Aug 10" },
//     { title: "Vista Tower", status: "Live", date: "Aug 03" },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F3F1EB] text-[#0F1222]">
//       {/* background halo */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-x-0 -top-40 h-80 blur-3xl"
//         style={{
//           background:
//             "radial-gradient(60% 60% at 50% 30%, rgba(35,77,126,.20), rgba(35,77,126,0) 70%)",
//         }}
//       />

//       {/* Topbar */}
//       <header className="sticky top-0 z-40 bg-[#F3F1EB] backdrop-blur border-b border-zinc-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-0 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setOpen((s) => !s)}
//               className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 hover:bg-zinc-50"
//             >
//               <FiMenu />
//             </button>
//             <div className="hidden md:flex items-center gap-2 text-sm text-zinc-500">
//               <MdOutlineSpaceDashboard className="text-[18px]" />
//               <span>Admin</span>
//               <FiChevronRight />
//               <span className="text-zinc-900 font-medium">Dashboard</span>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <form className="hidden md:flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 focus-within:ring-2 focus-within:ring-[rgba(35,77,126,0.25)]">
//               <FiSearch className="text-zinc-500" />
//               <input
//                 type="text"
//                 placeholder="Search posts, projects…"
//                 className="w-64 bg-transparent outline-none text-sm"
//               />
//             </form>
//             <Link
//               href="/admin/dashboard/upload-project"
//               className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-[color:#234D7E] px-3 py-2 text-sm font-medium text-white hover:bg-[color:#1D3F68]"
//             >
//               <FiUpload />
//               Upload Project
//             </Link>
            
//           </div>
//         </div>
//       </header>

//       <div className="max-w-7xl mx-auto px-4 sm:px-0">
//         {/* Sidebar + content */}
//         <div className="md:grid md:grid-cols-[220px_1fr] md:gap-8">
//           {/* Sidebar */}
//           <aside
//             className={`${
//               open ? "block" : "hidden"
//             } md:block md:sticky md:top-20 self-start mt-6`}
//           >
//             <nav className="rounded-2xl border border-zinc-100 bg-white shadow-[0_10px_30px_rgba(17,17,26,0.04)]">
//               <div className="px-4 py-3 text-xs uppercase tracking-wide text-zinc-500">
//                 Manage
//               </div>
//               <ul className="px-2 pb-2">
//                 <SideItem
//                   href="/admin/dashboard"
//                   icon={<MdOutlineSpaceDashboard />}
//                   label="Overview"
//                   active
//                 />
//                 <SideItem
//                   href="/admin/dashboard/blogs"
//                   icon={<MdOutlineArticle />}
//                   label="Blogs"
//                 />
//                 <SideItem
//                   href="/admin/dashboard/projects"
//                   icon={<MdOutlineCollectionsBookmark />}
//                   label="Projects"
//                 />
//                 <SideItem
//                   href="/admin/dashboard/upload-project"
//                   icon={<FiUpload />}
//                   label="Upload Project"
//                 />
//                 <SideItem
//                   href="/admin/dashboard/featured-projects"
//                   icon={<FiStar />}
//                   label="Featured Projects"
//                 />
//                 <SideItem
//                   href="/admin/dashboard/jobs"
//                   icon={<FiBriefcase />}
//                   label="Jobs"
//                 />
//               </ul>

//               <div className="px-4 py-3 text-xs uppercase tracking-wide text-zinc-500 border-t border-zinc-100">
//                 Account
//               </div>
//               <ul className="px-2 pb-4">
//                  <SideItem href="#" icon={<FiLogOut />} label="Logout" />
//               </ul>
//             </nav>
//           </aside>

//           {/* Main content */}
//           <main className="mt-6 md:mt-8">
//             {/* Welcome panel */}
//             <section className="relative overflow-hidden rounded-3xl border border-zinc-100 bg-gradient-to-br from-white via-[rgba(35,77,126,0.06)] to-white p-6 md:p-8">
//               <div
//                 aria-hidden
//                 className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-2xl"
//                 style={{
//                   background:
//                     "radial-gradient(45% 45% at 50% 50%, rgba(35,77,126,.20), rgba(35,77,126,0))",
//                 }}
//               />
//               <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
//                 Welcome back, Admin 👋
//               </h1>
//               <p className="mt-2 text-zinc-600 max-w-2xl">
//                 Quick snapshot of your content. Create, edit, and publish with a
//                 single click.
//               </p>

              
//             </section>

//             {/* Quick actions */}
//             <section className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               <ActionCard
//                 href="/admin/dashboard/blogs"
//                 icon={<FiFileText />}
//                 title="Manage Blogs"
//                 desc="Create, edit and publish articles."
//               />
//               {/* <ActionCard
//                 href="/admin/dashboard/projects"
//                 icon={<FiGrid />}
//                 title="Manage Projects"
//                 desc="Organize and showcase your work."
//               />
//               <ActionCard
//                 href="/admin/dashboard/upload-project"
//                 icon={<FiUpload />}
//                 title="Upload Project"
//                 desc="Add a new project with images & meta."
//                 primary
//               />
//               <ActionCard
//                 href="/admin/dashboard/featured-projects"
//                 icon={<FiStar />}
//                 title="Featured Projects"
//                 desc="Promote or curate homepage spotlight."
//                 primary
//               />
//               <ActionCard
//                 href="/admin/dashboard/jobs"
//                 icon={<FiBriefcase />}
//                 title="Manage Jobs"
//                 desc="Post, edit, and close roles."
//                 primary
//               /> */}
//             </section>

//             {/* Tables */}
//             {/* <section className="mt-8 grid lg:grid-cols-2 gap-6">
//               <GlassPanel title="Recent Blogs">
//                 <Table
//                   cols={["Title", "Status", "Date"]}
//                   rows={recentBlogs.map((b) => [b.title, b.status, b.date])}
//                 />
//                 <FooterLink href="/admin/dashboard/blogs" label="View all blogs" />
//               </GlassPanel>

//               <GlassPanel title="Recent Projects">
//                 <Table
//                   cols={["Title", "Status", "Date"]}
//                   rows={recentProjects.map((p) => [p.title, p.status, p.date])}
//                 />
//                 <FooterLink href="/admin/dashboard/projects" label="View all projects" />
//               </GlassPanel>
//             </section> */}
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------------------------- UI Subcomponents --------------------------- */

// function SideItem({ href, icon, label, active }) {
//   return (
//     <li>
//       <Link
//         href={href}
//         className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
//           active
//             ? "bg-[rgba(35,77,126,0.08)] text-[color:#234D7E]"
//             : "text-zinc-700 hover:bg-zinc-50"
//         }`}
//       >
//         <span className="text-[18px]">{icon}</span>
//         <span>{label}</span>
//       </Link>
//     </li>
//   );
// }

// function StatCard({ label, value, delta }) {
//   return (
//     <div className="rounded-2xl border border-zinc-100 bg-white p-4 shadow-[0_10px_30px_rgba(17,17,26,0.04)]">
//       <div className="text-xs uppercase tracking-wide text-zinc-500">{label}</div>
//       <div className="mt-1 text-2xl font-semibold">{value}</div>
//       <div className="mt-1 text-xs text-zinc-500">{delta}</div>
//     </div>
//   );
// }

// function ActionCard({ href, icon, title, desc, primary }) {
//   return (
//     <Link
//       href={href}
//       className={`group block rounded-2xl border border-zinc-100 bg-white p-5 shadow-[0_10px_30px_rgba(17,17,26,0.04)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(35,77,126,0.12)] ${
//         primary ? "ring-1 ring-[rgba(35,77,126,0.18)]" : ""
//       }`}
//     >
//       <div className="flex items-center gap-3">
//         <div
//           className="grid h-10 w-10 place-items-center rounded-xl"
//           style={{ background: BRAND.primarySoft, color: BRAND.primary }}
//         >
//           {icon}
//         </div>
//         <div>
//           <h3 className="text-[15px] font-semibold">{title}</h3>
//           <p className="text-sm text-zinc-600">{desc}</p>
//         </div>
//       </div>
//       <div className="mt-4 flex items-center text-sm font-medium text-[color:#234D7E]">
//         Go
//         <FiChevronRight className="ml-1 transition-transform group-hover:translate-x-0.5" />
//       </div>
//     </Link>
//   );
// }

// function GlassPanel({ title, children }) {
//   return (
//     <div className="rounded-2xl border border-zinc-100 bg-white/90 backdrop-blur p-5 shadow-[0_10px_30px_rgba(17,17,26,0.04)]">
//       <div className="mb-3 flex items-center justify-between">
//         <h4 className="text-[15px] font-semibold">{title}</h4>
//       </div>
//       {children}
//     </div>
//   );
// }

// function Table({ cols, rows }) {
//   return (
//     <div className="overflow-hidden rounded-xl border border-zinc-100">
//       <table className="w-full text-sm">
//         <thead className="bg-zinc-50/60">
//           <tr>
//             {cols.map((c) => (
//               <th key={c} className="px-3 py-2 text-left font-medium text-zinc-600">
//                 {c}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-zinc-100">
//           {rows.map((r, i) => (
//             <tr key={i} className="hover:bg-zinc-50/50">
//               {r.map((cell, j) => (
//                 <td key={j} className="px-3 py-2">
//                   {cell}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// function FooterLink({ href, label }) {
//   return (
//     <div className="mt-3 flex justify-end">
//       <Link
//         href={href}
//         className="text-sm font-medium text-[color:#234D7E] hover:underline"
//       >
//         {label}
//       </Link>
//     </div>
//   );
// }

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiSearch,
  FiFilter,
  FiRefreshCw,
  FiCalendar,
  FiUser,
  FiFileText,
  FiTag,
} from "react-icons/fi";
import logo from "@/assets/logo.png";

// ----------- Small utilities ----------
function classNames(...s) {
  return s.filter(Boolean).join(" ");
}
function useDebouncedValue(value, delay = 350) {
  const [v, setV] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setV(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return v;
}

// ----------- Skeleton ----------
function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl overflow-hidden border border-[#232323] bg-[#181818] dark:bg-[#181818]">
      <div className="aspect-[16/9] bg-[#232323]" />
      <div className="p-4 space-y-3">
        <div className="h-3 w-24 bg-[#232323] rounded" />
        <div className="h-5 w-3/4 bg-[#232323] rounded" />
        <div className="h-3 w-full bg-[#232323] rounded" />
        <div className="h-3 w-2/3 bg-[#232323] rounded" />
        <div className="flex gap-2 pt-2">
          <div className="h-5 w-16 bg-[#232323] rounded-full" />
          <div className="h-5 w-16 bg-[#232323] rounded-full" />
        </div>
      </div>
    </div>
  );
}

// ----------- Empty state ----------
function EmptyState({ onCreate, onRefresh }) {
  return (
    <div className="rounded-2xl border border-[#232323] bg-[#181818] p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.13)]">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#232323]">
        <FiFileText className="text-[#86D8FF]" />
      </div>
      <h3 className="text-lg font-semibold text-[#E0E0E0]">No blog posts yet</h3>
      <p className="mt-1 text-[#B0B0B0]">
        Create your first article or refresh if you think this is a mistake.
      </p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          onClick={onRefresh}
          className="inline-flex items-center gap-2 rounded-full border border-[#333] px-4 py-2 text-sm text-[#86D8FF] hover:bg-[#232323]"
        >
          <FiRefreshCw /> Refresh
        </button>
        <Link
          href="/admin/dashboard/blogs/new"
          className="inline-flex items-center gap-2 rounded-full border border-[#86D8FF] px-5 py-2 text-sm text-[#86D8FF] hover:bg-[#86D8FF] hover:text-[#161616] bg-transparent"
        >
          <FiPlus /> New Blog
        </Link>
      </div>
    </div>
  );
}

// ----------- Badge ----------
function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#232323] border border-[#86D8FF]/20 px-2 py-0.5 text-[11px] text-[#86D8FF]">
      {children}
    </span>
  );
}

// ----------- Main Page ----------
export default function BlogListPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // controls
  const [q, setQ] = useState("");
  const dq = useDebouncedValue(q, 300);
  const [category, setCategory] = useState("All");
  const [author, setAuthor] = useState("All");
  const [sort, setSort] = useState("updated-desc");

  const [deleting, setDeleting] = useState(null);

  const fetchBlogs = async () => {
    setLoading(true);
    const res = await fetch("/api/blogs", { cache: "no-store" });
    const data = await res.json();
    if (data?.success && Array.isArray(data.blogs)) {
      setBlogs(data.blogs);
    } else if (Array.isArray(data)) {
      setBlogs(data);
    } else {
      setBlogs([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (slug) => {
    if (!confirm("Delete this blog?")) return;
    setDeleting(slug);
    const prev = blogs;
    setBlogs((arr) => arr.filter((b) => b.urlSlug !== slug));
    try {
      const res = await fetch(`/api/blogs/${slug}`, { method: "DELETE" });
      if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        alert("Error deleting: " + (error?.error || "Unknown error"));
        setBlogs(prev);
      }
    } finally {
      setDeleting(null);
    }
  };

  // facet data
  const categories = useMemo(() => {
    const set = new Set(blogs.map((b) => b.category).filter(Boolean));
    return ["All", ...Array.from(set)];
  }, [blogs]);

  const authors = useMemo(() => {
    const set = new Set(blogs.map((b) => b.author).filter(Boolean));
    return ["All", ...Array.from(set)];
  }, [blogs]);

  // filtering
  const filtered = useMemo(() => {
    const s = (dq || "").toLowerCase();
    let list = [...blogs];

    if (s) {
      list = list.filter(
        (b) =>
          (b.title || "").toLowerCase().includes(s) ||
          (b.description || "").toLowerCase().includes(s) ||
          (b.category || "").toLowerCase().includes(s) ||
          (b.author || "").toLowerCase().includes(s)
      );
    }
    if (category !== "All") list = list.filter((b) => b.category === category);
    if (author !== "All") list = list.filter((b) => b.author === author);

    switch (sort) {
      case "updated-asc":
        list.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));
        break;
      case "title-asc":
        list.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
        break;
      case "title-desc":
        list.sort((a, b) => (b.title || "").localeCompare(a.title || ""));
        break;
      default:
        // updated-desc
        list.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    }
    return list;
  }, [blogs, dq, category, author, sort]);

  return (
    <main className="min-h-screen pt-20 bg-[#000000]">
      {/* Header */}
      <header className="border-b border-[#232323] bg-[#181818]/200 backdrop-blur sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* <Image src={logo} alt="logo" className="h-10 w-10" /> */}
            <div>
              {/* <div className="text-xs tracking-wider uppercase text-[#B0B0B0]">Admin</div> */}
              <h1 className="text-xl font-semibold leading-tight text-[#E0E0E0]">Blog Dashboard</h1>
            </div>
          </div>
          <Link
            href="/admin/dashboard/blogs/new"
            className="inline-flex items-center gap-2 rounded-full border border-[#86D8FF] px-4 h-10 hover:bg-[#86D8FF] hover:text-[#161616] text-[#86D8FF] transition"
          >
            <FiPlus /> New Post
          </Link>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-5 py-6">
        {/* Controls */}
        <div className="rounded-2xl border border-[#232323] bg-[#181818] p-4 md:p-5 shadow-[0_12px_40px_rgba(0,255,133,0.12)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            <div className="md:col-span-5 relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B0B0B0]" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search title, description, author, category…"
                className="w-full pl-9 pr-3 h-10 rounded-full border border-[#232323] bg-[#121212] text-[#E0E0E0] outline-none focus:ring-2 focus:ring-[#86D8FF]/30"
              />
            </div>
            <div className="md:col-span-2 flex items-center gap-2">
              <FiFilter className="text-[#B0B0B0]" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-10 w-full rounded-full border border-[#232323] bg-[#121212] px-3 text-[#E0E0E0] focus:ring-2 focus:ring-[#86D8FF]/30"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="h-10 w-full rounded-full border border-[#232323] bg-[#121212] px-3 text-[#E0E0E0] focus:ring-2 focus:ring-[#86D8FF]/30"
              >
                {authors.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-3">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="h-10 w-full rounded-full border border-[#232323] bg-[#121212] px-3 text-[#E0E0E0] focus:ring-2 focus:ring-[#86D8FF]/30"
              >
                <option value="updated-desc">Newest updated</option>
                <option value="updated-asc">Oldest updated</option>
                <option value="title-asc">Title A–Z</option>
                <option value="title-desc">Title Z–A</option>
              </select>
            </div>
          </div>
        </div>

        {/* Metrics row */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          <Metric label="Total Posts" value={blogs.length} />
          <Metric label="Visible Now" value={filtered.length} />
          <Metric
            label="Unique Authors"
            value={authors.filter((a) => a !== "All").length}
          />
          <Metric
            label="Categories"
            value={categories.filter((c) => c !== "All").length}
          />
        </div>

        {/* Grid */}
        <div className="mt-6">
          {loading ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <EmptyState onCreate={() => {}} onRefresh={fetchBlogs} />
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((blog) => (
                <article
                  key={blog._id}
                  className="rounded-2xl overflow-hidden border border-[#232323] bg-[#181818] group shadow-[0_6px_18px_rgba(0,255,133,0.04)] hover:shadow-[0_14px_40px_rgba(0,255,133,0.11)] transition-shadow"
                >
                  <figure className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={blog.image || "/placeholder.png"}
                      alt={blog.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <figcaption className="absolute left-3 top-3 flex items-center gap-2">
                      <Badge><FiTag className="mr-1" /> {blog.category || "General"}</Badge>
                    </figcaption>
                  </figure>

                  <div className="p-4">
                    <h2 className="text-lg font-semibold leading-snug line-clamp-2 text-[#E0E0E0]">
                      {blog.title}
                    </h2>
                    <p className="mt-1 text-[13px] text-[#B0B0B0] line-clamp-2">
                      {blog.description || "No description"}
                    </p>

                    <div className="mt-3 flex items-center justify-between text-xs text-[#B0B0B0]">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1">
                          <FiCalendar />
                          {blog.updatedAt
                            ? new Date(blog.updatedAt).toLocaleDateString()
                            : "—"}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <FiUser />
                          {blog.author || "Unknown"}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-end gap-2 border-t border-[#232323] pt-3">
                      <Link
                        href={`/admin/dashboard/blogs/${blog.urlSlug}`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#333] px-3 py-1.5 text-sm text-[#86D8FF] hover:bg-[#86D8FF]/10"
                        title="Edit"
                      >
                        <FiEdit2 /> Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(blog.urlSlug)}
                        disabled={deleting === blog.urlSlug}
                        className={classNames(
                          "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition",
                          deleting === blog.urlSlug
                            ? "border-[#333] text-[#B0B0B0] cursor-wait"
                            : "border-[#86D8FF] hover:bg-[#86D8FF] hover:text-[#161616] text-[#86D8FF]"
                        )}
                        title="Delete"
                      >
                        <FiTrash2 />
                        {deleting === blog.urlSlug ? "Deleting…" : "Delete"}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
      <style jsx>{`
        .chip {
          @apply rounded-full bg-[#232323] border border-[#86D8FF]/40 px-3 py-1 text-xs text-[#86D8FF];
        }
      `}</style>
    </main>
  );
}

// ----------- Metric component -----------
function Metric({ label, value }) {
  return (
    <div className="rounded-xl border border-[#232323] bg-[#181818] p-4 flex items-center gap-3 shadow-[0_8px_26px_rgba(0,255,133,0.06)]">
      <div className="h-9 w-9 rounded-full bg-[#232323] border border-[#86D8FF]/30 flex items-center justify-center text-[13px] text-[#86D8FF]">
        {String(label).slice(0, 1)}
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-[#B0B0B0]">{label}</div>
        <div className="text-lg font-semibold text-[#E0E0E0]">{value}</div>
      </div>
    </div>
  );
}
