import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarSrc: string;
};

export default function ProfileHeader({
  name,
  bio,
  avatarSrc,
}: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="rounded-full bg-gradient-to-br from-white/80 to-orange-100/40 p-1 shadow-[0_12px_30px_-10px_rgba(194,120,52,0.45)] dark:from-white/10 dark:to-white/0">
        <Image
          src={avatarSrc}
          alt={name}
          width={150}
          height={150}
          className="h-36 w-36 rounded-full object-cover ring-1 ring-black/5"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-xl font-bold tracking-tight text-foreground">
          {name}
        </h1>
        <p className="text-sm text-[#8a7160] dark:text-[#c9b6a4]">{bio}</p>
      </div>
    </div>
  );
}
