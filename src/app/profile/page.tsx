import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Profile",
};

export default function ProfilePage() {
    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Profile
            </h1>

            <p className="mt-4 opacity-90">
                Board-certified radiologist focusing on imaging and anatomy
                education. Interests include abdominal CT/MRI, imaging-based
                clinical research, and curriculum design for medical students
                and residents.
            </p>

            <section className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                    <h2 className="text-lg font-medium">
                        Affiliations & Roles
                    </h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            Department of Radiology, Example University Hospital
                        </li>
                        <li>
                            IMAGE Lab — Imaging & Anatomy for Groundbreaking
                            Education & Collaborative Research
                        </li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <h2 className="text-lg font-medium">Qualifications</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>MD (Radiology)</li>
                        <li>Board-certified Radiologist</li>
                        <li>Member: JRS / RSNA</li>
                    </ul>
                </div>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-medium">Research Interests</h2>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Abdominal imaging (CT/MRI)</li>
                    <li>Anatomy education and visualization</li>
                    <li>Clinical research design and methodology</li>
                </ul>
            </section>

            <div className="mt-10">
                <a href="/contact" className="btn">
                    Contact
                </a>
            </div>
        </div>
    );
}
