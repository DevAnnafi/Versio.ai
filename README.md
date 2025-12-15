# Versio.ai

> Version control for AI prompts. Finally.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[Live Demo](https://versio.ai) • [Documentation](#documentation) • [Discord Community](#support)

---

## 🚀 The Problem

Managing AI prompts is chaos:
- Prompts scattered across Notion, Slack, and code
- No version control or change tracking
- Can't easily test and compare outputs
- Hard to collaborate with your team
- No way to roll back when changes break things

## ✨ The Solution

Versio.ai gives you Git-like version control for your prompts, with built-in testing and collaboration.

### Core Features

- 🔄 **Version Control** - Track every change, see diffs, rollback instantly
- 🧪 **Side-by-Side Testing** - Compare outputs across versions and models
- 👥 **Team Collaboration** - Share prompts, review changes, manage access
- 📊 **Analytics** - Track costs and performance across providers
- 🔌 **Multi-Model Support** - OpenAI, Anthropic, and more
- 🎯 **Smart Diff View** - See exactly what changed between versions
- 💰 **Cost Tracking** - Monitor API usage and expenses
- 🔐 **Secure** - Your API keys stay with you

---

## 🎯 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (free tier works)

### Installation

```bash
# Clone the repository
git clone https://github.com/DevAnnafi/versio-ai.git
cd versio-ai

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Run database migrations
npm run db:migrate

# Start development server
npm run dev
```

Visit `http://localhost:3000` and create an account to get started.

### Environment Variables

Create a `.env.local` file with:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript
- **Styling:** Tailwind CSS, Shadcn/ui
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL (Supabase)
- **Auth:** Supabase Auth
- **AI APIs:** OpenAI, Anthropic Claude
- **Deployment:** Vercel
- **Analytics:** (Coming soon)
- **Payments:** Stripe (Coming soon)

---

## 📖 Documentation

### Basic Usage

1. **Create a Prompt**
   - Click "New Prompt" in the dashboard
   - Write your prompt content
   - Save - a version is created automatically

2. **Edit & Version**
   - Every save creates a new version
   - View full history with timestamps
   - Click any version to see its content

3. **Test Your Prompts**
   - Select a prompt
   - Click "Test"
   - Choose your AI model (OpenAI/Anthropic)
   - See outputs side-by-side

4. **Compare Versions**
   - Go to version history
   - Select two versions
   - See diff view with changes highlighted

### API Integration

Add your API keys in Settings:
- OpenAI API key
- Anthropic API key

Your keys are encrypted and never leave your browser for testing.

---

## 🗺️ Project Status

**Current Stage:** MVP Development (v0.1.0)

### Completed
- [x] User authentication (email/password)
- [x] Basic prompt CRUD operations
- [x] Automatic version creation
- [x] Version history view
- [x] Diff viewer between versions
- [x] One-click rollback

### In Progress
- [ ] Side-by-side testing interface
- [ ] OpenAI integration
- [ ] Anthropic Claude integration
- [ ] Cost tracking

### Planned
- [ ] Team collaboration features
- [ ] API access
- [ ] Export/import functionality
- [ ] Prompt templates library
- [ ] Performance analytics
- [ ] CLI tool
- [ ] GitHub integration
- [ ] Slack integration

---

## 🤝 Contributing

This is primarily a solo project, but contributions are welcome!

### Ways to Contribute

- 🐛 Report bugs via [GitHub Issues](https://github.com/DevAnnafi/versio-ai/issues)
- 💡 Suggest features in [Discussions](https://github.com/DevAnnafi/versio-ai/discussions)
- 📖 Improve documentation
- 🎨 Enhance UI/UX
- 🧪 Add tests
- 🔧 Fix bugs

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Write clear commit messages
- Follow the existing code style
- Add comments for complex logic
- Test your changes locally
- Keep PRs focused and small

---

## 🗓️ Roadmap

### Phase 1: MVP (January 2026) ✅
- Core prompt management
- Version control system
- Basic UI/UX

### Phase 2: Testing & AI Integration (February 2026)
- Multi-model testing
- Cost tracking
- Performance metrics
- Batch testing

### Phase 3: Collaboration (March 2026)
- Team workspaces
- Role-based access control
- Comments and reviews
- Activity feed

### Phase 4: Advanced Features (Q2 2026)
- RESTful API
- CLI tool
- GitHub integration
- Prompt marketplace
- Advanced analytics

### Phase 5: Enterprise (Q3 2026)
- SSO/SAML
- Audit logs
- Custom deployment
- SLA guarantees

---

## 📸 Screenshots

_Coming soon - app is in active development_

---

## 🌟 Why Versio.ai?

### For Individual Developers
- Track your prompt experiments
- Never lose a working version
- Test changes before deploying
- Organize all prompts in one place

### For Teams
- Collaborate on prompt engineering
- Review changes before production
- Share best practices
- Track team usage and costs

### For Companies
- Centralized prompt management
- Version control and audit trails
- Cost optimization
- Compliance and security

---

### Recent Updates

- **Week 4:** Launched version history and diff viewer
- **Week 3:** Implemented automatic versioning
- **Week 2:** Built core CRUD functionality
- **Week 1:** Set up project structure and auth

---

## 💬 Support

### Get Help

- **Email:** islamannafi@gmail.com
- **Discord:** [Join our community](#)
- **Issues:** [GitHub Issues](https://github.com/DevAnnafi/versio-ai/issues)
- **Discussions:** [GitHub Discussions](https://github.com/DevAnnafi/versio-ai/discussions)

### FAQ

**Q: Is this free?**  
A: Currently in beta, free for early users. Paid plans coming soon.

**Q: Where are my API keys stored?**  
A: Your keys are encrypted and stored securely. For testing, they stay in your browser.

**Q: Can I export my prompts?**  
A: Export functionality coming in Phase 4.

**Q: Do you support other AI models?**  
A: Starting with OpenAI and Anthropic. More models coming based on demand.

**Q: Can I self-host this?**  
A: Not yet, but it's on the roadmap for enterprise customers.

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

This means you can:
- ✅ Use commercially
- ✅ Modify
- ✅ Distribute
- ✅ Use privately

You must:
- 📝 Include copyright notice
- 📝 Include license text

---

## 🙏 Acknowledgments

Built with these amazing tools:

- [Next.js](https://nextjs.org/) - React framework
- [Supabase](https://supabase.com/) - Backend and database
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Shadcn/ui](https://ui.shadcn.com/) - UI components
- [Vercel](https://vercel.com/) - Hosting and deployment
- [OpenAI](https://openai.com/) - AI models
- [Anthropic](https://anthropic.com/) - Claude AI

Special thanks to the #buildinpublic community for support and feedback.

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/DevAnnafi/versio-ai?style=social)
![GitHub forks](https://img.shields.io/github/forks/DevAnnafi/versio-ai?style=social)
![GitHub issues](https://img.shields.io/github/issues/DevAnnafi/versio-ai)
![GitHub pull requests](https://img.shields.io/github/issues-pr/DevAnnafi/versio-ai)

---

## 🚀 Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/DevAnnafi/versio-ai)

---

**⭐ If you find this useful, please give it a star!**

Made with ☕ and ❤️ by [Annafi Islam](https://twitter.com/DevAnnafi)

---

_Last updated: December 2025_