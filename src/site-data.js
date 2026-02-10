export const siteData = {
  profile: {
    name: "Nic Lin",
    title: "Protocol Researcher | Smart Contract Engineer",
    tagline:
      "👋 Hi, I’m Nic Lin — a protocol researcher and smart contract engineer focused on L2s, MEV, and secure protocol design. I’ve worked on core infrastructure in the Ethereum ecosystem, including account abstraction, rollups, and MEV-aware DEXs. I publish research-backed insights, contribute to open-source tooling, and speak at global Ethereum conferences. Currently exploring new frontiers in universal account, L1/L2 interoperability and censorship resistance.",
    imageUrl: "/pfp.png",
    imageAlt: "Profile picture of Nic Lin",
    actions: [
      { label: "Email", url: "mailto:23.nic.lin@gmail.com" },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/hsiu-ping-lin-50267ba3/",
      },
      // { label: "X/Twitter", url: "https://x.com/NICLin619" },
      { label: "GitHub", url: "https://github.com/NIC619" },
      { label: "Medium", url: "https://medium.com/@twedusuck" },
      {
        label: "ETHTaipeixTEM Newsletter",
        url: "https://ethtaipeixtem.substack.com/",
      },
      {
        label: "Curriculum Vitae",
        url: "https://www.dropbox.com/scl/fi/n4fa3skuz7hyibe2pokyf/CV_Nic_Lin.pdf?rlkey=vhtz5b5kuef3lt9sdlvb65bh2&st=yrwka78z&raw=1",
      },
    ],
  },
  sections: [
    {
      id: "work-experience",
      title: "Work Experiences",
      description: "Protocol research, security, and smart contract engineering.",
      items: [
        {
          title: "Puffer Finance",
          meta: "Project Lead • Jun 2025 — Present",
          bullets: [
            "Led development of UniFi Based Rollup, which supports instant withdrawals via TEE proofs and achieves L1↔L2 synchronous composability through Signal Service",
            "Designed Puffer Preconf AVS, which provides crypto-economic transaction preconfirmations for L2s",
          ],
        },
        {
          title: "Ethereum Support Program & Independent Projects",
          meta: "Protocol Researcher (Independent / Grants) • 2020 — Present",
          bullets: [
            "Built a Force Inclusion SDK to help users bypass censorship on L2s; delivered grant-supported research and implementation for the Ethereum ecosystem",
            "Developed an anonymous reputation system using zero-knowledge proofs to support Sybil-resistant identities",
            "Published 30+ technical articles explaining complex Ethereum mechanics, from ERC-4337 to bridging and MEV",
            "Presented research and engineering talks at events including Devcon, ETHTaipei, COSCUP, and various community meetups",
          ],
        },
        {
          title: "imToken / Tokenlon",
          meta: "Senior Protocol Engineer, imToken Labs • Nov. 2020 — Jun. 2025",
          bullets: [
            "Designed and shipped Account Abstraction (AA) smart contracts for imToken, introducing modular architecture, custom recovery mechanisms and novel validation centric design",
            "Led integration of Order Flow Auctions across multiple chains, increasing MEV protection for DEX users and generating new revenue streams",
            "Researched and implemented MEV prevention and mitigation strategies",
            "Conducted security evaluations of rollups like OP Stack, Arbitrum, StarkNet, and ZKsync; identified safety gaps in force inclusion mechanisms",
          ],
        },
        {
          title: "Ethereum Foundation",
          meta: "Blockchain Engineer • Jul. 2017 — Jan. 2020",
          bullets: [
            "Contributed to early Eth 2.0 designs and specifications",
            "Implemented the concept of ERC-2938 (Native Account Abstraction) through prototyping and technical exploration, contributing to its feasibility and design refinement",
            "Participated in protocol discussions and community R&D efforts",
          ],
        },
      ],
    },
    {
      id: "featured-writings",
      title: "Featured Writings",
      description: "Selected long-form research and explainers.",
      items: [
        {
          title: "Validation Centric Design for AA wallet",
          meta: "Account Abstraction • Wallet design",
          summary:
            "Presents a validation-centric architecture for ERC-4337 wallets that balances developer agility with strong security guarantees.",
          links: [
            {
              label: "Read article",
              url: "https://nic619.substack.com/p/validation-centric-design-a-new-paradigm?r=4r81",
            },
          ],
        },
        {
          title: "EIP-4844 Proto-Danksharding (Part 1 & Part 2)",
          meta: "EIP-4844 • Data availability",
          summary:
            "Breaks down the economics and mechanics of EIP-4844, from blob fee markets to how rollups inherit cheaper data availability.",
          links: [
            {
              label: "Part 1",
              url: "https://medium.com/taipei-ethereum-meetup/rollup-and-the-boost-from-proto-danksharding-85d2fe0566b6",
            },
            {
              label: "Part 2",
              url: "https://medium.com/taipei-ethereum-meetup/rollup-proto-danksharding-implementation-detail-913a3c61fde8",
            },
          ],
        },
        {
          title: "Data Availability Sampling series (Part 1, Part 2, Part 3)",
          meta: "Rollup security • Sampling",
          summary:
            "Explores how data availability sampling secures rollups, covering protocol intuition, math, and practical implementation details.",
          links: [
            {
              label: "Part 1",
              url: "https://medium.com/taipei-ethereum-meetup/data-availability-sampling-part-one-why-das-dc17f83355b5",
            },
            {
              label: "Part 2",
              url: "https://medium.com/taipei-ethereum-meetup/data-availability-sampling-part-two-das-in-danksharding-071767bd133e",
            },
            {
              label: "Part 3",
              url: "https://medium.com/taipei-ethereum-meetup/data-availability-sampling-part-three-celestia-eigen-da-and-avail-da-1a11d29b3a1b",
            },
          ],
        },
        {
          title: "MEV, MEV protection and MEV-aware design (Series 1–7)",
          meta: "MEV • Order flow • Auctions",
          summary:
            "Multi-part deep dive into MEV, explaining extraction vectors and patterns for MEV-aware protocol and product design.",
          links: [
            {
              label: "1",
              url: "https://medium.com/taipei-ethereum-meetup/after-the-merge-mev-309e836698cf",
            },
            {
              label: "2",
              url: "https://medium.com/taipei-ethereum-meetup/mev-proposer-builder-separation-968d519a4898",
            },
            {
              label: "3",
              url: "https://medium.com/taipei-ethereum-meetup/mev-pbs-patches-6a66852a7265",
            },
            {
              label: "4",
              url: "https://medium.com/taipei-ethereum-meetup/take-back-mev-5e867757b216",
            },
            {
              label: "5",
              url: "https://medium.com/taipei-ethereum-meetup/design-for-fairer-mev-ecosystem-part1-5dc4c38db5a7",
            },
            {
              label: "6",
              url: "https://medium.com/taipei-ethereum-meetup/design-for-fairer-mev-ecosystem-part2-1d6863098c5f",
            },
            {
              label: "7",
              url: "https://medium.com/taipei-ethereum-meetup/design-for-fairer-mev-ecosystem-part3-intent-and-suave-f170ee0b22d9",
            },
          ],
        },
      ],
    },
    {
      id: "featured-talks",
      title: "Featured Talks",
      description: "Conference and workshop presentations.",
      items: [
        {
          title:
            "Validation Centric Design: agile and safe development for devs, an interchangeable AA wallet for users",
          meta: "ETHTaipei 2025",
          summary:
            "Presented a novel validation-centric design for Account Abstraction wallets, emphasizing interchangeable wallet modules and safer upgrade paths.",
          links: [
            {
              label: "Slide",
              url: "https://docs.google.com/presentation/d/1JSUEqTotU6_OxAv-rzjsnO-B6bhPUekgzXjy4JiMv1k/edit?usp=sharing",
            },
            {
              label: "Recording",
              url: "https://www.youtube.com/watch?v=E-Z562g3IiM",
            },
          ],
        },
        {
          title: "Supercharging EOA with EIP-7702",
          meta: "imToken Internal Sharing 2024",
          summary:
            "Explained how EIP-7702 can enhance EOAs with smart account-like capabilities and what it means for wallet UX and security.",
          links: [
            {
              label: "Slide",
              url: "https://www.dropbox.com/scl/fi/r9mscjc1kpi15ngyr28s5/EIP-7702.pdf?rlkey=6vk4j7nr2pmvwsv0y44xjr3xk&st=7t6lqcw1&dl=0",
            },
          ],
        },
        {
          title: "What is OFA and why should you care",
          meta: "ETHTaipei 2024",
          summary:
            "Introduced Order Flow Auctions (OFA) to wallet and dApp developers, covering mechanisms, incentives, and user protection benefits.",
          links: [
            {
              label: "Slide",
              url: "https://www.dropbox.com/scl/fi/5voseimcnosb7tk2bvlp2/2024-03-ETHTaipei-What-is-OFA-and-why-should-you-care.pdf?rlkey=f862fwpi1lw04mxoo7z5wlda7&st=mdgvhml6&dl=0",
            },
            {
              label: "Recording",
              url: "https://youtu.be/LdMrJ3TEMyE?si=hIlz9KFNbdQmDMW9",
            },
          ],
        },
        {
          title: "ERC-4337 Account Abstraction workshops",
          meta: "DappLearning Online Workshop 2023",
          summary:
            "Hands-on workshop walking through the ERC-4337 workflow, highlighting common integration pitfalls and best practices.",
          links: [
            {
              label: "Slide",
              url: "https://www.dropbox.com/scl/fi/c6f0m2ei3rzwqbjwgv4ac/Dapp-Learning-AA-Workshop-Account-Contract.pdf?rlkey=0m55npx0u1ot2to7hfoi9g514&st=ibmjc40a&dl=0",
            },
            {
              label: "Recording",
              url: "https://youtu.be/F2AWai-A0Ng?si=A0EFYABZm1YCruM2",
            },
          ],
        },
      ],
    },
    {
      id: "projects",
      title: "Projects",
      description: "Selected protocol and tooling projects.",
      items: [
        {
          title: "Force Inclusion SDK",
          meta: "Ethereum Support Program Grant • 2024",
          bullets: [
            "Developed a Force Inclusion SDK to help wallets implement censorship resistance on rollups like Optimism and Arbitrum",
            "Built a frontend interface allowing users to force-include their transactions if censored",
            "Delivered comprehensive research on how various L2s implement force inclusion mechanisms and their edge cases",
            "Published implementation guides and SDK docs to support adoption by wallet developers",
          ],
          links: [
            {
              label: "Uncensored Book",
              url: "https://rollup-fortress.github.io/uncensored-book/introduction.html",
            },
          ],
        },
        {
          title: "ZK-Based Anonymous Reputation System",
          meta: "Ethereum Support Program Grant • 2020",
          bullets: [
            "Designed and implemented a privacy-preserving reputation system using zero-knowledge proofs",
            "Enabled Sybil-resistant interactions without compromising user anonymity, useful for voting, signaling, or access control",
            "Prototyped credential issuance and verification flows with Solidity contracts and frontend integration",
          ],
          links: [
            {
              label: "GitHub",
              url: "https://github.com/NIC619/UniRep",
            },
          ],
        },
      ],
    },
  ],
};
