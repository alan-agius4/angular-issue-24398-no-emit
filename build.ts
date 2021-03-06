import * as ng from '@angular/compiler-cli/src/ngtools_api2';
import * as ts from 'typescript';
import * as path from 'path';

const options = {
	baseUrl: '.',
	basePath: '.',
	emitDecoratorMetadata: true,
	experimentalDecorators: true,
	moduleResolution: ts.ModuleResolutionKind.NodeJs,
	module: ts.ModuleKind.ES2015,
	target: ts.ScriptTarget.ES2015,
	outDir: './dist',
	flatModuleId: 'test',
	flatModuleOutFile: 'test.js',
	fullTemplateTypeCheck: true,
	skipTemplateCodegen: true,
	strictMetadataEmit: true,
	noEmitOnError: true
};

const host = ng.createCompilerHost({ options });

const program = ng.createProgram({
	rootNames: [path.resolve('./src/public_api.ts')],
	options,
	host
});


const result = program.emit({});
console.error(ng.formatDiagnostics(result.diagnostics));