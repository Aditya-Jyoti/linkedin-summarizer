<script lang="ts"></script>

<main class="flex flex-col">
	<!-- splash section -->
	<section class="flex flex-col items-center justify-center gap-4 bg-border/25 p-2 py-16">
		<!-- splash text -->
		<div class="flex flex-col items-center justify-center">
			<span class="text-center text-4xl font-medium tracking-wide">
				Summarize and <span class="text-primary">analyze</span>
			</span>
			<span class="text-xl"
				>your linkedin data with just one <span
					class="underline decoration-[1px] underline-offset-2">click</span
				>
			</span>

			<button
				class="my-4 rounded-xl bg-neutral px-12 py-1 text-textOnPrimary shadow-2xl transition-colors duration-300 hover:bg-gray-700"
				>Get Started</button
			>
		</div>

		<!-- splash image -->
		<div class="flex gap-36">
			<img src="/splash1.svg" alt="realtime analytics" class="aspect-square w-52" />
			<img src="/splash2.svg" alt="growing statistics" class="aspect-square w-52" />
			<img src="/splash3.svg" alt="visualizing projections" class="aspect-square w-52" />
		</div>
	</section>

	<!-- mock dashboard -->
	<section
		class="mx-auto my-24 w-[75%] rounded-xl border-[1px] border-border bg-border/15 p-4 shadow-xl transition-shadow duration-300 hover:shadow-2xl"
	>
		<div class="flex w-full items-center justify-between border-b-[1px] border-border p-2">
			<span class="text-lg font-medium">Dashboard</span>
			<div class="flex items-center gap-2">
				<span class="text-lg font-normal">Hey user!</span>
				<img src="/default_user.jpg" alt="" class="w-8 rounded-full" />
			</div>
		</div>

		<div class="flex flex-col gap-4 p-4">
			<!-- dashboard row 1 -->
			<div class="flex gap-4">
				<div
					class="flex flex-col rounded-xl border-[1px] border-border bg-background p-2 transition-shadow duration-300 hover:shadow-md"
				>
					<span class="font-medium">Connections</span>
					<img src="/dashboard/graph1.png" alt="graph1" class="" />
				</div>
				<div
					class="flex flex-col rounded-xl border-[1px] border-border bg-background p-2 transition-shadow duration-300 hover:shadow-md"
				>
					<span class="font-medium">Profile visitors</span>
					<img src="/dashboard/graph2.png" alt="graph2" class="" />
				</div>
				<div
					class="flex flex-col rounded-xl border-[1px] border-border bg-background p-2 transition-shadow duration-300 hover:shadow-md"
				>
					<span class="font-medium">Search appearances</span>
					<img src="/dashboard/graph3.png" alt="graph3" class="w-72" />
				</div>
			</div>

			<!-- dashboard row 2 -->
			<div class="flex gap-4">
				<div
					class="flex flex-col rounded-xl border-[1px] border-border bg-background p-2 transition-shadow duration-300 hover:shadow-md"
				>
					<span class="font-medium">Monetization</span>
					<img src="/dashboard/table1.png" alt="graph1" class="" />
				</div>
				<div
					class="flex flex-col rounded-xl border-[1px] border-border bg-background p-2 transition-shadow duration-300 hover:shadow-md"
				>
					<span class="font-medium">Post impressions</span>
					<img src="/dashboard/graph4.png" alt="graph4" class="mt-4" />
				</div>
			</div>
		</div>
	</section>

	<!-- about section -->
	<section id="about" class="mx-auto flex w-[80%] items-center justify-between pb-24">
		<!-- about text -->
		<section class="flex flex-col gap-4">
			<span class="text-4xl font-bold tracking-wide">About Us</span>

			<div class="flex flex-col gap-2">
				<span>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error consectetur modi unde
					cupiditate placeat earum, recusandae nesciunt tempora, itaque, iure dignissimos cumque
					aperiam illum mollitia fugit quia voluptatibus natus? Nam?
				</span>
				<span>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error consectetur modi unde
					cupiditate placeat earum, recusandae nesciunt tempora, itaque, iure dignissimos cumque
					aperiam illum mollitia fugit quia voluptatibus natus? Nam?
				</span>
				<span>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error consectetur modi unde
					cupiditate placeat earum, recusandae nesciunt tempora, itaque, iure dignissimos cumque
					aperiam illum mollitia fugit quia voluptatibus natus? Nam?
				</span>
				<span>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error consectetur modi unde
					cupiditate placeat earum, recusandae nesciunt tempora, itaque, iure dignissimos cumque
					aperiam illum mollitia fugit quia voluptatibus natus? Nam?
				</span>
			</div>

			<div class="text-xl">
				So why not give us a <button
					class="rounded-xl font-bold tracking-wide text-primary hover:underline">try?</button
				>
			</div>
		</section>

		<!-- about image -->
		<div class="flex flex-col items-center gap-4">
			<img src="/about/about-noarrow.png" alt="about" />
		</div>
	</section>

	<!-- pricing section -->
	<section id="pricing" class="flex flex-col items-center justify-center gap-16 pb-24">
		<span class="text-4xl font-bold tracking-wide">Pricing</span>

		<!-- pricing tiers -->
		<div class="flex w-[60%] justify-around">
			<div
				class="bg-primaryCompliment/10 hover:bg-primaryCompliment/15 flex w-[20rem] flex-col items-center gap-1 rounded-2xl p-4 shadow-2xl transition-all duration-300 hover:-translate-y-2"
			>
				<span class="text-3xl font-medium">Single</span>
				<span class="text-center text-sm"
					>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				</span>

				<div class="flex w-full flex-col justify-start gap-1 text-lg">
					<span>feature 1</span>
					<span>feature 2</span>
					<span>feature 3</span>
					<span>feature 4</span>
					<span>feature 5</span>
					<span>feature 6</span>
				</div>

				<span class="flex w-full justify-end text-3xl font-bold">10$</span>

				<button
					class="bg-primaryCompliment hover:bg-primaryCompliment/75 my-4 w-full rounded-xl py-2 font-bold text-textOnPrimary transition-all duration-300"
					>check out</button
				>
			</div>

			<div
				class="flex w-[20rem] -translate-y-8 flex-col items-center gap-1 rounded-2xl bg-primary/10 p-4 shadow-2xl transition-all duration-300 hover:-translate-y-10 hover:bg-primary/15"
			>
				<span class="text-3xl font-medium">Monthly</span>
				<span class="text-center text-sm"
					>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				</span>

				<div class="flex w-full flex-col justify-start gap-1 text-lg">
					<span>feature 1</span>
					<span>feature 2</span>
					<span>feature 3</span>
					<span>feature 4</span>
					<span>feature 5</span>
					<span>feature 6</span>
				</div>

				<span class="flex w-full justify-end text-3xl font-bold">25$</span>

				<button
					class="my-4 w-full rounded-xl bg-secondary py-2 font-bold text-textOnPrimary transition-all duration-300 hover:bg-secondary/75"
					>check out</button
				>
			</div>
			<div
				class="bg-primaryCompliment/10 hover:bg-primaryCompliment/15 flex w-[20rem] flex-col items-center gap-1 rounded-2xl p-4 shadow-2xl transition-all duration-300 hover:-translate-y-2"
			>
				<span class="text-3xl font-medium">Yearly</span>
				<span class="text-center text-sm"
					>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				</span>

				<div class="flex w-full flex-col justify-start gap-1 text-lg">
					<span>feature 1</span>
					<span>feature 2</span>
					<span>feature 3</span>
					<span>feature 4</span>
					<span>feature 5</span>
					<span>feature 6</span>
				</div>

				<span class="flex w-full justify-end text-3xl font-bold">100$</span>

				<button
					class="bg-primaryCompliment hover:bg-primaryCompliment/75 my-4 w-full rounded-xl py-2 font-bold text-textOnPrimary transition-all duration-300"
					>check out</button
				>
			</div>
		</div>
	</section>

	<!-- contact section -->
	<section id="contact" class="mx-auto flex w-[80%] items-center justify-between gap-16 pb-24">
		<div class="w-[50%]">
			<img src="/contact.svg" alt="" />
		</div>
		<div class="flex w-[80%] flex-col gap-12 rounded-xl p-12">
			<span class="flex w-full justify-end text-4xl font-bold tracking-wide">Contact us</span>

			<div class="flex flex-col gap-2">
				<div class="flex flex-col gap-1">
					<span class="translate-x-1 text-sm font-medium">name</span>
					<input
						type="text"
						class="rounded-lg border-2 border-border px-4 py-1"
						placeholder="enter your name..."
					/>
				</div>
				<div class="flex flex-col gap-1">
					<span class="translate-x-1 text-sm font-medium">email</span>
					<input
						type="email"
						class="rounded-lg border-2 border-border px-4 py-1"
						placeholder="enter your email..."
					/>
				</div>
				<div class="flex flex-col gap-1">
					<span class="translate-x-1 text-sm font-medium">query</span>
					<textarea
						class="rounded-lg border-2 border-border p-1 px-4"
						placeholder="enter your query..."
					></textarea>
				</div>
			</div>
		</div>
	</section>
</main>
