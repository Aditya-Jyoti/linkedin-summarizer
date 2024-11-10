<script lang="ts"></script>

<main class="flex flex-col">
	<!-- splash section -->
	<section class="flex flex-col items-center justify-center gap-4 bg-border/25 p-2 py-12">
		<!-- splash text -->
		<div class="flex flex-col items-center justify-center">
			<span class="text-center text-4xl font-medium tracking-wide">
				Summarize and <span class="text-primary">analyze</span>
			</span>
			<span class="text-xl"
				>your linkedin data with just one <span class="text-primary">click</span>
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
		class="mx-auto my-12 w-[75%] rounded-xl border-[1px] border-border bg-border/15 p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300"
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
				<div class="flex flex-col rounded-xl border-[1px] border-border bg-background p-2">
					<span class="font-medium">Connections</span>
					<img src="/dashboard/graph1.png" alt="graph1" class="" />
				</div>
				<div class="flex flex-col rounded-xl border-[1px] border-border bg-background p-2">
					<span class="font-medium">Profile visitors</span>
					<img src="/dashboard/graph2.png" alt="graph2" class="" />
				</div>
				<div
					class="flex flex-col gap-2 rounded-xl border-[1px] border-border bg-background p-2 px-4"
				>
					<span class="font-medium">Search appearances</span>
					<img src="/dashboard/graph3.png" alt="graph3" class="w-72" />
				</div>
			</div>

			<!-- dashboard row 2 -->
			<div class="flex gap-4">
				<div class="flex flex-col rounded-xl border-[1px] border-border bg-background p-2">
					<span class="font-medium">Monetization</span>
					<img src="/dashboard/table1.png" alt="graph1" class="" />
				</div>
				<div class="flex flex-col rounded-xl border-[1px] border-border bg-background p-2">
					<span class="font-medium">Post impressions</span>
					<img src="/dashboard/graph4.png" alt="graph4" class="" />
				</div>
			</div>
		</div>
	</section>
</main>
