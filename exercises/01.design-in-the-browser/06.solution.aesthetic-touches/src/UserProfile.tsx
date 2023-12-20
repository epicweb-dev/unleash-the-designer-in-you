import profileImage from './assets/avatar.png'

// User data
const user = {
	name: 'Jessy Styles',
	avatarUrl: profileImage,
	registerDate: '10/31/2023',
	bio: 'Jessy is passionate about designing visually stunning and highly functional web applications, with code. She really enjoys using Tailwind CSS.',
}

export default function UserProfile() {
	return (
		<div className="pb-20 pt-48">
			<div className="mx-auto max-w-md overflow-auto rounded-3xl bg-white shadow-lg ring-1 ring-slate-300">
				<div className="mt-32 border-t border-slate-300 bg-gradient-to-b from-slate-200/75 to-white">
					<header className="flex flex-col items-center px-8">
						<img
							src={user.avatarUrl}
							alt={`avatar for ${user.name}`}
							className="-mt-20 h-40 w-40 rounded-full object-cover shadow-lg ring-1 ring-slate-300 ring-offset-[6px]"
						/>
						<h1 className="mt-8 text-center text-3xl">{user.name}</h1>
						<p className="mt-2 text-center text-slate-500">
							Joined on {user.registerDate}
						</p>
					</header>
					<p className="mt-8 px-8 text-lg text-slate-900">{user.bio}</p>
				</div>
				<footer className="mt-10 border-t border-slate-300">
					<a
						href="#"
						className="duration-50 block px-8 py-6 text-center font-semibold text-slate-900 transition hover:bg-slate-100"
					>
						Read notes
					</a>
				</footer>
			</div>
		</div>
	)
}