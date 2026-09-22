import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

const links = [
  { label: "🐙 깃허브", href: "https://github.com/zedd9" },
  { label: "✍️ 블로그", href: "" },
  { label: "📮 이메일", href: "mailto:gusdnre@gmail.com" },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 items-start justify-center bg-gradient-to-b from-[#fff8f0] via-[#fdecdd] to-[#fbe1cd] px-6 py-20 dark:from-[#231810] dark:via-[#2b1d13] dark:to-[#241a12]">
      <main className="flex w-full max-w-sm flex-col items-center gap-10">
        <ProfileHeader
          name="신개발"
          bio="풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요"
          avatarSrc="/profile.jpeg"
        />
        <div className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkCard key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
      </main>
    </div>
  );
}
