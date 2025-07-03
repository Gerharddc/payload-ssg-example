import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const payloadPath = path.join(dirname, "../src/app/(payload)");
const payloadDisabledPath = path.join(dirname, "../src/app/_(payload)");

async function buildStatic() {
    try {
        fs.renameSync(payloadPath, payloadDisabledPath)
        console.log("Payload folder temporarily disabled for static build");

        process.env.BUILD_MODE = "static";
        execSync("next build", { stdio: "inherit" })
    } catch (error) {
        console.error("Build failed:", error);
        process.exit(1);
    } finally {
        if (fs.existsSync(payloadDisabledPath)) {
            fs.renameSync(payloadDisabledPath, payloadPath);
            console.log("Payload folder restored");
        } else {
            console.warn("Payload folder was not found to restore");
        }
    }
}

buildStatic()
