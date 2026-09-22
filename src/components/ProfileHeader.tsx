type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarInitial: string;
};

export default function ProfileHeader({
  name,
  bio,
  avatarInitial,
}: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-36 w-36 items-center justify-center rounded-full bg-zinc-200 text-5xl font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
        {avatarInitial}
      </div>
      <h1 className="text-xl font-bold text-foreground">{name}</h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{bio}</p>
    </div>
  );
}
