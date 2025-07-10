import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "taskify",
  description: "برای یادداشت امور روزمره",
};

export default function Home() {
  return (
    <h1 className="text-2xl text-gray-900">
      سلام، به برنامه خوش آمدید
    </h1>
  );
}
