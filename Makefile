# Makefile for Next.js Studio Project

# Variables
NODE_MODULES = node_modules
PACKAGE_LOCK = package-lock.json
NEXT_DIR = .next
OUT_DIR = out

# Colors for output
GREEN = \033[0;32m
YELLOW = \033[1;33m
RED = \033[0;31m
NC = \033[0m # No Color

.PHONY: help dev build static start clean install lint typecheck genkit-dev genkit-watch

# Default target
help: ## Show this help message
	@echo "$(GREEN)Available targets:$(NC)"
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  $(YELLOW)%-15s$(NC) %s\n", $$1, $$2}' $(MAKEFILE_LIST)

# Development
dev: $(NODE_MODULES) ## Start development server with hot reload (localhost:9002)
	@echo "$(GREEN)Starting development server...$(NC)"
	npm run dev

# Production build
build: $(NODE_MODULES) ## Build the application for production
	@echo "$(GREEN)Building application for production...$(NC)"
	npm run build

# Static site generation
static: $(NODE_MODULES) ## Generate static site export
	@echo "$(GREEN)Generating static site...$(NC)"
	npm run build
	@echo "$(GREEN)Static site generated in $(OUT_DIR) directory$(NC)"

# Start production server
start: build ## Start production server
	@echo "$(GREEN)Starting production server...$(NC)"
	npm run start

# Install dependencies
install: ## Install project dependencies
	@echo "$(GREEN)Installing dependencies...$(NC)"
	npm install

# Update dependencies
update: ## Update project dependencies
	@echo "$(GREEN)Updating dependencies...$(NC)"
	npm update

# Linting
lint: $(NODE_MODULES) ## Run ESLint
	@echo "$(GREEN)Running linter...$(NC)"
	npm run lint

lint-fix: $(NODE_MODULES) ## Run ESLint with auto-fix
	@echo "$(GREEN)Running linter with auto-fix...$(NC)"
	npm run lint -- --fix

# Type checking
typecheck: $(NODE_MODULES) ## Run TypeScript type checking
	@echo "$(GREEN)Running type checker...$(NC)"
	npm run typecheck

# Genkit development (AI functionality)
genkit-dev: $(NODE_MODULES) ## Start Genkit development server
	@echo "$(GREEN)Starting Genkit development server...$(NC)"
	npm run genkit:dev

genkit-watch: $(NODE_MODULES) ## Start Genkit with file watching
	@echo "$(GREEN)Starting Genkit with file watching...$(NC)"
	npm run genkit:watch

# Quality checks
check: lint typecheck ## Run all quality checks (lint + typecheck)
	@echo "$(GREEN)All quality checks passed!$(NC)"

# Clean targets
clean-deps: ## Remove node_modules and package-lock.json
	@echo "$(YELLOW)Removing dependencies...$(NC)"
	rm -rf $(NODE_MODULES) $(PACKAGE_LOCK)

clean-build: ## Remove build artifacts
	@echo "$(YELLOW)Removing build artifacts...$(NC)"
	rm -rf $(NEXT_DIR) $(OUT_DIR)

clean: clean-build ## Remove all generated files (build artifacts)
	@echo "$(YELLOW)Cleaning completed$(NC)"

clean-all: clean-deps clean-build ## Remove all generated files and dependencies
	@echo "$(YELLOW)Deep clean completed$(NC)"

# Fresh start
fresh: clean-all install ## Clean everything and reinstall dependencies
	@echo "$(GREEN)Fresh installation completed!$(NC)"

# Quick commands
quick-dev: ## Quick start - install deps if needed and start dev server
	@if [ ! -d "$(NODE_MODULES)" ]; then \
		echo "$(YELLOW)Dependencies not found, installing...$(NC)"; \
		$(MAKE) install; \
	fi
	$(MAKE) dev

# Production deployment preparation
deploy-prep: clean-build check build ## Prepare for deployment (clean, check, build)
	@echo "$(GREEN)Application ready for deployment!$(NC)"

# File watching for dependency changes
$(NODE_MODULES): $(PACKAGE_LOCK)
	@if [ ! -d "$(NODE_MODULES)" ]; then \
		echo "$(YELLOW)Installing dependencies...$(NC)"; \
		npm install; \
	fi
	@touch $(NODE_MODULES)

# Development with specific port
dev-port: $(NODE_MODULES) ## Start dev server on custom port (usage: make dev-port PORT=3000)
	@echo "$(GREEN)Starting development server on port $(or $(PORT),9002)...$(NC)"
	npm run dev -- -p $(or $(PORT),9002)

# Show project info
info: ## Show project information
	@echo "$(GREEN)Project Information:$(NC)"
	@echo "  Name: $(shell node -p "require('./package.json').name")"
	@echo "  Version: $(shell node -p "require('./package.json').version")"
	@echo "  Node.js: $(shell node --version)"
	@echo "  npm: $(shell npm --version)"
	@echo "  Next.js: $(shell npm list next --depth=0 2>/dev/null | grep next | cut -d@ -f2 || echo 'Not installed')" 