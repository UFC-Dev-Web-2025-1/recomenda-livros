import * as fs from "fs";
import { execSync } from "child_process";

let passed = 0;
let total = 3;

console.log(
    "\n\n---------------------------\n\n🔍 Iniciando verificação da atividade...\n"
);

// Teste 1: Verifica se o devcontainer existe
if (fs.existsSync(".devcontainer/devcontainer.json")) {
    console.log(
        "✅ Teste 1/3: Arquivo .devcontainer/devcontainer.json encontrado."
    );
    passed++;
} else {
    console.log(
        "❌ Teste 1/3: Arquivo .devcontainer/devcontainer.json não encontrado."
    );
}

// Teste 2: Verifica se Next.js está listado nas dependências
try {
    const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
    if (pkg.dependencies.next || pkg.devDependencies.next) {
        console.log("✅ Teste 2/3: Next.js está listado em package.json.");
        passed++;
    } else {
        console.log("❌ Teste 2/3: Next.js não está listado nas dependências.");
    }
} catch (e) {
    console.error("❌ Teste 2/3: Erro ao ler package.json: ", e.message);
}

// Teste 3: Verifica se o projeto compila com npm run build
try {
    if (fs.existsSync("package.json")) {
        execSync("echo 'hello'");
        execSync("npm install", { stdio: "ignore" });
        execSync("npm run build", { stdio: "ignore" });
        console.log(
            "✅ Teste 3/3: Projeto compilou com sucesso (npm run build)."
        );
        passed++;
    } else {
        console.log("❌ Teste 3/3: Arquivo package.json não encontrado.");
    }
} catch (e) {
    console.log("❌ Teste 3/3: Erro ao rodar npm run build: " + e.message);
}

// Resultado final
console.log(
    `\n🎯 Resultado: ${passed}/${total} testes passaram.` +
        "\n\n---------------------------\n\n"
);

// Código de saída para GitHub Classroom
process.exit(passed === total ? 0 : 1);
