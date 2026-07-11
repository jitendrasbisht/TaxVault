import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock3,
  FileText,
  MessageSquare,
  User,
  Building2,
  Flag,
  Users,
  TrendingUp,
  Phone,
  Mail,
  Upload,
  Download,
  Printer,
  UserPlus,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";

import { PageHeader } from "@/components/ui/PageHeader";

const quickActions = [
  {
    title: "Upload Document",
    icon: Upload,
  },
  {
    title: "Assign Member",
    icon: UserPlus,
  },
  {
    title: "Export PDF",
    icon: Download,
  },
  {
    title: "Print Case",
    icon: Printer,
  },
];

export default function CaseDetailsPage() {
  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <Link
            to="/cases"
            className="mb-4 inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
          >
            <ArrowLeft size={16} />
            Back to Cases
          </Link>

          <PageHeader
            title="GST Filing • ABC Manufacturing Pvt Ltd"
            description="Case ID • TV-1048"
          />

        </div>

        <button className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
          Edit Case
        </button>

      </div>

      {/* Quick Actions Section */}
      <div className="grid gap-4 md:grid-cols-4">

        {quickActions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
            >
              <Icon
                className="mx-auto text-blue-600 transition-transform duration-300 group-hover:scale-110"
                size={24}
              />

              <p className="mt-3 text-sm font-semibold">
                {action.title}
              </p>
            </button>
          );
        })}
      </div>

      {/* Summary Grid Section */}
      <div className="grid gap-6 lg:grid-cols-4">

        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 text-white shadow-xl">

          <Building2 className="mb-4" size={28} />

          <h2 className="text-xl font-semibold">
            ABC Manufacturing Pvt Ltd
          </h2>

          <p className="mt-2 text-slate-300">
            GST Filing Engagement
          </p>

          <div className="mt-6 grid grid-cols-2 gap-5">

            <div>

              <p className="text-sm text-slate-400">
                Priority
              </p>

              <div className="mt-2 flex items-center gap-2">

                <Flag size={16} />

                High

              </div>

            </div>

            <div>

              <p className="text-sm text-slate-400">
                Progress
              </p>

              <div className="mt-2 flex items-center gap-2">

                <TrendingUp size={16} />

                67%

              </div>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <Phone className="mb-3 text-blue-600" />

          <h3 className="font-semibold">
            Contact
          </h3>

          <p className="mt-3 text-slate-600">
            +91 98765 43210
          </p>

          <div className="mt-5 flex items-center gap-2 text-slate-600">

            <Mail size={16} />

            accounts@abc.com

          </div>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <Users className="mb-3 text-blue-600" />

          <h3 className="font-semibold">
            Team
          </h3>

          <div className="mt-4 space-y-3">

            <div>Rahul Sharma</div>

            <div>Priya Gupta</div>

            <div>Amit Verma</div>

          </div>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <Clock3 className="mb-3 text-amber-600" />

          <h3 className="font-semibold">
            Next Milestone
          </h3>

          <p className="mt-4">
            Client Approval
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Due Tomorrow
          </p>

        </div>

      </div>

      {/* Main Grid Content */}
      <div className="grid gap-6 lg:grid-cols-4">

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <h3 className="font-semibold text-slate-900">
            Case Status
          </h3>

          <span className="mt-5 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            In Progress
          </span>

          <div className="mt-8 space-y-6">

            <div className="flex items-center gap-3">
              <User size={18} />
              Rahul Sharma
            </div>

            <div className="flex items-center gap-3">
              <Calendar size={18} />
              Due 18 Jul 2026
            </div>

            <div className="flex items-center gap-3">
              <Clock3 size={18} />
              67% Complete
            </div>

          </div>

        </div>

        <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <h3 className="mb-5 text-lg font-semibold">
            Case Timeline
          </h3>

          <div className="space-y-6">

            <div className="flex gap-4">
              <CheckCircle2 className="mt-1 text-emerald-500" />
              <div>
                <p className="font-medium">
                  GST documents received
                </p>
                <p className="text-sm text-slate-500">
                  11 Jul 2026
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FileText className="mt-1 text-blue-500" />
              <div>
                <p className="font-medium">
                  Return preparation started
                </p>
                <p className="text-sm text-slate-500">
                  12 Jul 2026
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <MessageSquare className="mt-1 text-amber-500" />
              <div>
                <p className="font-medium">
                  Awaiting client approval
                </p>
                <p className="text-sm text-slate-500">
                  Today
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="space-y-6">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <h3 className="font-semibold">
              Checklist
            </h3>

            <div className="mt-5 space-y-4 text-sm">

              <label className="flex gap-3">
                <input type="checkbox" checked readOnly />
                Documents Verified
              </label>

              <label className="flex gap-3">
                <input type="checkbox" checked readOnly />
                Compliance Checked
              </label>

              <label className="flex gap-3">
                <input type="checkbox" />
                Client Approval
              </label>

              <label className="flex gap-3">
                <input type="checkbox" />
                Return Filed
              </label>

            </div>

          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <h3 className="font-semibold">
              Notes
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              Client requested filing before
              Friday. Waiting for final
              confirmation before submission.
            </p>

          </div>

        </div>

      </div>

      {/* Add Internal Comment Section */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between">

          <h2 className="text-lg font-semibold">
            Add Internal Comment
          </h2>

          <button className="rounded-xl bg-slate-900 px-5 py-2 text-sm font-medium text-white hover:bg-slate-800">
            <Plus className="mr-2 inline" size={16} />
            Save
          </button>

        </div>

        <textarea
          rows={5}
          placeholder="Write internal notes about this case..."
          className="mt-5 w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-blue-500"
        />
      </div>

      {/* Compliance Progress Section */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between">

          <h2 className="text-lg font-semibold">
            Compliance Progress
          </h2>

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            75% Complete
          </span>

        </div>

        <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-200">

          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />

        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-4">

          <div className="rounded-xl bg-slate-50 p-5 text-center">

            <h3 className="text-3xl font-bold">
              18
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Documents
            </p>

          </div>

          <div className="rounded-xl bg-slate-50 p-5 text-center">

            <h3 className="text-3xl font-bold">
              9
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Activities
            </p>

          </div>

          <div className="rounded-xl bg-slate-50 p-5 text-center">

            <h3 className="text-3xl font-bold">
              4
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Team Members
            </p>

          </div>

          <div className="rounded-xl bg-slate-50 p-5 text-center">

            <h3 className="text-3xl font-bold">
              2
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Pending Tasks
            </p>

          </div>

        </div>
      </div>

    </div>
  );
}