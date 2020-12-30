/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { identifierName } from '../compile_metadata';
import * as o from '../output/output_ast';
import { error } from '../util';
import { compileFactoryFunction, dependenciesFromGlobalMetadata } from './r3_factory';
import { Identifiers as R3 } from './r3_identifiers';
import { typeWithParameters } from './util';
export function compilePipeFromMetadata(metadata) {
    const definitionMapValues = [];
    // e.g. `name: 'myPipe'`
    definitionMapValues.push({ key: 'name', value: o.literal(metadata.pipeName), quoted: false });
    // e.g. `type: MyPipe`
    definitionMapValues.push({ key: 'type', value: metadata.type, quoted: false });
    const templateFactory = compileFactoryFunction({
        name: metadata.name,
        type: metadata.type,
        deps: metadata.deps,
        injectFn: R3.directiveInject,
    }, true);
    definitionMapValues.push({ key: 'factory', value: templateFactory.factory, quoted: false });
    // e.g. `pure: true`
    definitionMapValues.push({ key: 'pure', value: o.literal(metadata.pure), quoted: false });
    const expression = o.importExpr(R3.definePipe).callFn([o.literalMap(definitionMapValues)]);
    const type = new o.ExpressionType(o.importExpr(R3.PipeDefWithMeta, [
        typeWithParameters(metadata.type, metadata.typeArgumentCount),
        new o.ExpressionType(new o.LiteralExpr(metadata.pipeName)),
    ]));
    return { expression, type, statements: templateFactory.statements };
}
/**
 * Write a pipe definition to the output context.
 */
export function compilePipeFromRender2(outputCtx, pipe, reflector) {
    const definitionMapValues = [];
    const name = identifierName(pipe.type);
    if (!name) {
        return error(`Cannot resolve the name of ${pipe.type}`);
    }
    const metadata = {
        name,
        pipeName: pipe.name,
        type: outputCtx.importExpr(pipe.type.reference),
        typeArgumentCount: 0,
        deps: dependenciesFromGlobalMetadata(pipe.type, outputCtx, reflector),
        pure: pipe.pure,
    };
    const res = compilePipeFromMetadata(metadata);
    const definitionField = outputCtx.constantPool.propertyNameOf(3 /* Pipe */);
    outputCtx.statements.push(new o.ClassStmt(
    /* name */ name, 
    /* parent */ null, 
    /* fields */ [new o.ClassField(
        /* name */ definitionField, 
        /* type */ o.INFERRED_TYPE, 
        /* modifiers */ [o.StmtModifier.Static], 
        /* initializer */ res.expression)], 
    /* getters */ [], 
    /* constructorMethod */ new o.ClassMethod(null, [], []), 
    /* methods */ []));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjNfcGlwZV9jb21waWxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9yZW5kZXIzL3IzX3BpcGVfY29tcGlsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFzQixjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUd4RSxPQUFPLEtBQUssQ0FBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzFDLE9BQU8sRUFBZ0IsS0FBSyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBRTdDLE9BQU8sRUFBdUIsc0JBQXNCLEVBQUUsOEJBQThCLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDMUcsT0FBTyxFQUFDLFdBQVcsSUFBSSxFQUFFLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFrQzFDLE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxRQUF3QjtJQUM5RCxNQUFNLG1CQUFtQixHQUEwRCxFQUFFLENBQUM7SUFFdEYsd0JBQXdCO0lBQ3hCLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBRTVGLHNCQUFzQjtJQUN0QixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBRTdFLE1BQU0sZUFBZSxHQUFHLHNCQUFzQixDQUMxQztRQUNFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtRQUNuQixJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7UUFD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QUFhLENBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBpbGVQaXBlTWV0YWRhdGEsIGlkZW50aWZpZXJOYW1lfSBmcm9tICcuLi9jb21waWxlX21ldGFkYXRhJztcbmltcG9ydCB7Q29tcGlsZVJlZmxlY3Rvcn0gZnJvbSAnLi4vY29tcGlsZV9yZWZsZWN0b3InO1xuaW1wb3J0IHtEZWZpbml0aW9uS2luZH0gZnJvbSAnLi4vY29uc3RhbnRfcG9vbCc7XG5pbXBvcnQgKiBhcyBvIGZyb20gJy4uL291dHB1dC9vdXRwdXRfYXN0JztcbmltcG9ydCB7T3V0cHV0Q29udGV4dCwgZXJyb3J9IGZyb20gJy4uL3V0aWwnO1xuXG5pbXBvcnQge1IzRGVwZW5kZW5jeU1ldGFkYXRhLCBjb21waWxlRmFjdG9yeUZ1bmN0aW9uLCBkZXBlbmRlbmNpZXNGcm9tR2xvYmFsTWV0YWRhdGF9IGZyb20gJy4vcjNfZmFjdG9yeSc7XG5pbXBvcnQge0lkZW50aWZpZXJzIGFzIFIzfSBmcm9tICcuL3IzX2lkZW50aWZpZXJzJztcbmltcG9ydCB7dHlwZVdpdGhQYXJhbWV0ZXJzfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFIzUGlwZU1ldGFkYXRhIHtcbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIHBpcGUgdHlwZS5cbiAgICovXG4gIG5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogQW4gZXhwcmVzc2lvbiByZXByZXNlbnRpbmcgYSByZWZlcmVuY2UgdG8gdGhlIHBpcGUgaXRzZWxmLlxuICAgKi9cbiAgdHlwZTogby5FeHByZXNzaW9uO1xuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgZ2VuZXJpYyB0eXBlIHBhcmFtZXRlcnMgb2YgdGhlIHR5cGUgaXRzZWxmLlxuICAgKi9cbiAgdHlwZUFyZ3VtZW50Q291bnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogTmFtZSBvZiB0aGUgcGlwZS5cbiAgICovXG4gIHBpcGVOYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlcGVuZGVuY2llcyBvZiB0aGUgcGlwZSdzIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgZGVwczogUjNEZXBlbmRlbmN5TWV0YWRhdGFbXXxudWxsO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBwaXBlIGlzIG1hcmtlZCBhcyBwdXJlLlxuICAgKi9cbiAgcHVyZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVQaXBlRnJvbU1ldGFkYXRhKG1ldGFkYXRhOiBSM1BpcGVNZXRhZGF0YSkge1xuICBjb25zdCBkZWZpbml0aW9uTWFwVmFsdWVzOiB7a2V5OiBzdHJpbmcsIHF1b3RlZDogYm9vbGVhbiwgdmFsdWU6IG8uRXhwcmVzc2lvbn1bXSA9IFtdO1xuXG4gIC8vIGUuZy4gYG5hbWU6ICdteVBpcGUnYFxuICBkZWZpbml0aW9uTWFwVmFsdWVzLnB1c2goe2tleTogJ25hbWUnLCB2YWx1ZTogby5saXRlcmFsKG1ldGFkYXRhLnBpcGVOYW1lKSwgcXVvdGVkOiBmYWxzZX0pO1xuXG4gIC8vIGUuZy4gYHR5cGU6IE15UGlwZWBcbiAgZGVmaW5pdGlvbk1hcFZhbHVlcy5wdXNoKHtrZXk6ICd0eXBlJywgdmFsdWU6IG1ldGFkYXRhLnR5cGUsIHF1b3RlZDogZmFsc2V9KTtcblxuICBjb25zdCB0ZW1wbGF0ZUZhY3RvcnkgPSBjb21waWxlRmFjdG9yeUZ1bmN0aW9uKFxuICAgICAge1xuICAgICAgICBuYW1lOiBtZXRhZGF0YS5uYW1lLFxuICAgICAgICB0eXBlOiBtZXRhZGF0YS50eXBlLFxuICAgICAgICBkZXBzOiBtZXRhZGF0YS5kZXBzLFxuICAgICAgICBpbmplY3RGbjogUjMuZGlyZWN0aXZlSW5qZWN0LFxuICAgICAgfSxcbiAgICAgIHRydWUpO1xuICBkZWZpbml0aW9uTWFwVmFsdWVzLnB1c2goe2tleTogJ2ZhY3RvcnknLCB2YWx1ZTogdGVtcGxhdGVGYWN0b3J5LmZhY3RvcnksIHF1b3RlZDogZmFsc2V9KTtcblxuICAvLyBlLmcuIGBwdXJlOiB0cnVlYFxuICBkZWZpbml0aW9uTWFwVmFsdWVzLnB1c2goe2tleTogJ3B1cmUnLCB2YWx1ZTogby5saXRlcmFsKG1ldGFkYXRhLnB1cmUpLCBxdW90ZWQ6IGZhbHNlfSk7XG5cbiAgY29uc3QgZXhwcmVzc2lvbiA9IG8uaW1wb3J0RXhwcihSMy5kZWZpbmVQaXBlKS5jYWxsRm4oW28ubGl0ZXJhbE1hcChkZWZpbml0aW9uTWFwVmFsdWVzKV0pO1xuICBjb25zdCB0eXBlID0gbmV3IG8uRXhwcmVzc2lvblR5cGUoby5pbXBvcnRFeHByKFIzLlBpcGVEZWZXaXRoTWV0YSwgW1xuICAgIHR5cGVXaXRoUGFyYW1ldGVycyhtZXRhZGF0YS50eXBlLCBtZXRhZGF0YS50eXBlQXJndW1lbnRDb3VudCksXG4gICAgbmV3IG8uRXhwcmVzc2lvblR5cGUobmV3IG8uTGl0ZXJhbEV4cHIobWV0YWRhdGEucGlwZU5hbWUpKSxcbiAgXSkpO1xuICByZXR1cm4ge2V4cHJlc3Npb24sIHR5cGUsIHN0YXRlbWVudHM6IHRlbXBsYXRlRmFjdG9yeS5zdGF0ZW1lbnRzfTtcbn1cblxuLyoqXG4gKiBXcml0ZSBhIHBpcGUgZGVmaW5pdGlvbiB0byB0aGUgb3V0cHV0IGNvbnRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlUGlwZUZyb21SZW5kZXIyKFxuICAgIG91dHB1dEN0eDogT3V0cHV0Q29udGV4dCwgcGlwZTogQ29tcGlsZVBpcGVNZXRhZGF0YSwgcmVmbGVjdG9yOiBDb21waWxlUmVmbGVjdG9yKSB7XG4gIGNvbnN0IGRlZmluaXRpb25NYXBWYWx1ZXM6IHtrZXk6IHN0cmluZywgcXVvdGVkOiBib29sZWFuLCB2YWx1ZTogby5FeHByZXNzaW9ufVtdID0gW107XG5cbiAgY29uc3QgbmFtZSA9IGlkZW50aWZpZXJOYW1lKHBpcGUudHlwZSk7XG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiBlcnJvcihgQ2Fubm90IHJlc29sdmUgdGhlIG5hbWUgb2YgJHtwaXBlLnR5cGV9YCk7XG4gIH1cblxuICBjb25zdCBtZXRhZGF0YTogUjNQaXBlTWV0YWRhdGEgPSB7XG4gICAgbmFtZSxcbiAgICBwaXBlTmFtZTogcGlwZS5uYW1lLFxuICAgIHR5cGU6IG91dHB1dEN0eC5pbXBvcnRFeHByKHBpcGUudHlwZS5yZWZlcmVuY2UpLFxuICAgIHR5cGVBcmd1bWVudENvdW50OiAwLFxuICAgIGRlcHM6IGRlcGVuZGVuY2llc0Zyb21HbG9iYWxNZXRhZGF0YShwaXBlLnR5cGUsIG91dHB1dEN0eCwgcmVmbGVjdG9yKSxcbiAgICBwdXJlOiBwaXBlLnB1cmUsXG4gIH07XG5cbiAgY29uc3QgcmVzID0gY29tcGlsZVBpcGVGcm9tTWV0YWRhdGEobWV0YWRhdGEpO1xuXG4gIGNvbnN0IGRlZmluaXRpb25GaWVsZCA9IG91dHB1dEN0eC5jb25zdGFudFBvb2wucHJvcGVydHlOYW1lT2YoRGVmaW5pdGlvbktpbmQuUGlwZSk7XG5cbiAgb3V0cHV0Q3R4LnN0YXRlbWVudHMucHVzaChuZXcgby5DbGFzc1N0bXQoXG4gICAgICAvKiBuYW1lICovIG5hbWUsXG4gICAgICAvKiBwYXJlbnQgKi8gbnVsbCxcbiAgICAgIC8qIGZpZWxkcyAqL1tuZXcgby5DbGFzc0ZpZWxkKFxuICAgICAgICAgIC8qIG5hbWUgKi8gZGVmaW5pdGlvbkZpZWxkLFxuICAgICAgICAgIC8qIHR5cGUgKi8gby5JTkZFUlJFRF9UWVBFLFxuICAgICAgICAgIC8qIG1vZGlmaWVycyAqL1tvLlN0bXRNb2RpZmllci5TdGF0aWNdLFxuICAgICAgICAgIC8qIGluaXRpYWxpemVyICovIHJlcy5leHByZXNzaW9uKV0sXG4gICAgICAvKiBnZXR0ZXJzICovW10sXG4gICAgICAvKiBjb25zdHJ1Y3Rvck1ldGhvZCAqLyBuZXcgby5DbGFzc01ldGhvZChudWxsLCBbXSwgW10pLFxuICAgICAgLyogbWV0aG9kcyAqL1tdKSk7XG59XG4iXX0=