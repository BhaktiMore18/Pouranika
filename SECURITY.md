# Security Policy

## Project Status

Pouranik is currently in **active development** and has not yet reached a stable release. We take security seriously from day one and encourage responsible disclosure of any security issues.

## Supported Versions

| Status | Supported          | Notes |
| ------ | ------------------ | ----- |
| Main Branch | :white_check_mark: | Active development, security fixes applied immediately |
| Development | :white_check_mark: | Pre-release testing, security issues addressed |
| Forks | :x: | Please report issues to the main repository |

**Note:** Once we reach v1.0.0, we will maintain a formal versioning and security support policy.

## Security Features

### Current Implementation
- **Environment Variable Protection** - API keys secured via environment variables
- **Input Sanitization** - User inputs validated and sanitized
- **HTTPS Enforcement** - All external API calls use secure connections
- **XSS Prevention** - React's built-in XSS protection mechanisms
- **Dependency Scanning** - Automated vulnerability scanning via GitHub Dependabot

### Planned Security Enhancements
- Content Security Policy (CSP) headers
- Rate limiting for API calls
- Enhanced input validation
- Security headers implementation
- Authentication system (future feature)

## Reporting a Vulnerability

### How to Report

If you discover a security vulnerability in Pouranik, please report it responsibly:

**For Critical/High Severity Issues:**
- **Method:** Create a GitHub issue with `[SECURITY]` prefix
- **Repository:** https://github.com/BhaktiMore18/Pouranika/issues/new
- **Response Time:** Within 48 hours
- **Please DO NOT** disclose security details publicly until we've addressed the issue

**For Lower Severity Issues:**
- Create a regular GitHub issue with the `security` label
- Include detailed reproduction steps
- Response time: Within 1 week

### What to Include

When reporting a vulnerability, please include:

```
Vulnerability Description:
- Clear description of the security issue
- Affected components/files
- Potential impact assessment

Reproduction Steps:
1. Step-by-step instructions
2. Required environment setup
3. Expected vs actual behavior

Environment Details:
- Browser and version
- Operating system
- Node.js version (if applicable)
- Any relevant configuration

Additional Information:
- Suggested fix (if any)
- Related security resources
- Your contact preference for follow-up
```

### Response Process

1. **Acknowledgment** (Within 48 hours)
   - Confirm receipt of report
   - Assign tracking number
   - Initial impact assessment

2. **Investigation** (1-5 days)
   - Reproduce the issue
   - Assess severity and impact
   - Develop fix strategy

3. **Fix Development** (1-2 weeks)
   - Implement security fix
   - Test thoroughly
   - Prepare documentation

4. **Disclosure** (Coordinated)
   - Deploy fix to main branch
   - Update security documentation
   - Credit reporter (if desired)

### Severity Assessment

| Severity | Response Time | Examples |
|----------|---------------|----------|
| **Critical** | 24-48 hours | Remote code execution, data exposure |
| **High** | 3-5 days | XSS, authentication bypass, API key exposure |
| **Medium** | 1-2 weeks | Information disclosure, CSRF |
| **Low** | 2-4 weeks | Configuration issues, minor information leaks |

## Security Best Practices for Contributors

### Development Guidelines
- Never commit API keys, tokens, or secrets to the repository
- Use environment variables for all sensitive configuration
- Validate and sanitize all user inputs
- Follow React security best practices
- Run security audits before submitting pull requests

### Environment Security
```bash
# Install dependencies securely
npm ci

# Run security audit
npm audit --audit-level moderate

# Check for vulnerabilities
npm audit fix
```

### API Key Management
```bash
# Correct - Use environment variables
VITE_GOOGLE_BOOKS_API_KEY=your_api_key_here

# Incorrect - Never hardcode secrets
const API_KEY = "AIzaSyD..." // DO NOT DO THIS
```

### Code Review Checklist
- [ ] No hardcoded secrets or API keys
- [ ] Input validation implemented
- [ ] External links use HTTPS
- [ ] Dependencies are up to date
- [ ] No security warnings in build output

## Security Resources

### Educational Materials
- [React Security Best Practices](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)
- [Vite Security Guide](https://vitejs.dev/guide/env-and-mode.html#env-files)
- [OWASP Frontend Security](https://owasp.org/www-project-top-ten/)
- [Node.js Security Checklist](https://blog.risingstack.com/node-js-security-checklist/)

### Tools and Resources
- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit) - Dependency vulnerability scanning
- [ESLint Security Plugin](https://github.com/nodesecurity/eslint-plugin-security) - Static analysis
- [Snyk](https://snyk.io/) - Advanced vulnerability scanning

## Security Acknowledgments

We appreciate security researchers and contributors who help keep Pouranik secure:

*No security reports have been received yet. Be the first to help us improve!*

When we receive our first security report, contributors will be listed here (with their permission).

## Contact Information

**Security Questions:** Create a GitHub issue with the `security` and `question` labels  
**General Discussion:** Use GitHub Discussions  
**Project Repository:** https://github.com/BhaktiMore18/Pouranika

## Scope

This security policy applies to:
- Main Pouranik repository code
- Documentation and configuration files
- Build and deployment scripts
- Third-party integrations (Google Books API)

**Out of Scope:**
- Issues in third-party dependencies (report to respective maintainers)
- General web browser vulnerabilities
- Issues requiring physical access to user devices

## Legal

By participating in our security disclosure program, you agree to:
- Make a good faith effort to avoid privacy violations and disruptions
- Only interact with accounts you own or have explicit permission to access
- Not access or modify user data without permission
- Report vulnerabilities as soon as possible after discovery
- Allow reasonable time for issue resolution before public disclosure

---

**Last Updated:** January 2025  
**Policy Version:** 1.0 (Pre-release)  
**Next Review:** Upon first stable release

> Security is a shared responsibility. Thank you for helping us build a secure platform for book discovery.
