/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
import { ReflectionCapabilities } from '../reflection/reflection_capabilities';
import { getClosureSafeProperty } from '../util/property';
import { injectArgs, ɵɵinject } from './injector_compatibility';
var ɵ0 = getClosureSafeProperty;
var USE_VALUE = getClosureSafeProperty({ provide: String, useValue: ɵ0 });
var EMPTY_ARRAY = [];
export function convertInjectableProviderToFactory(type, provider) {
    if (!provider) {
        var reflectionCapabilities = new ReflectionCapabilities();
        var deps_1 = reflectionCapabilities.parameters(type);
        // TODO - convert to flags.
        return function () { return new (type.bind.apply(type, tslib_1.__spread([void 0], injectArgs(deps_1))))(); };
    }
    if (USE_VALUE in provider) {
        var valueProvider_1 = provider;
        return function () { return valueProvider_1.useValue; };
    }
    else if (provider.useExisting) {
        var existingProvider_1 = provider;
        return function () { return ɵɵinject(existingProvider_1.useExisting); };
    }
    else if (provider.useFactory) {
        var factoryProvider_1 = provider;
        return function () { return factoryProvider_1.useFactory.apply(factoryProvider_1, tslib_1.__spread(injectArgs(factoryProvider_1.deps || EMPTY_ARRAY))); };
    }
    else if (provider.useClass) {
        var classProvider_1 = provider;
        var deps_2 = provider.deps;
        if (!deps_2) {
            var reflectionCapabilities = new ReflectionCapabilities();
            deps_2 = reflectionCapabilities.parameters(type);
        }
        return function () {
            var _a;
            return new ((_a = classProvider_1.useClass).bind.apply(_a, tslib_1.__spread([void 0], injectArgs(deps_2))))();
        };
    }
    else {
        var deps_3 = provider.deps;
        if (!deps_3) {
            var reflectionCapabilities = new ReflectionCapabilities();
            deps_3 = reflectionCapabilities.parameters(type);
        }
        return function () { return new (type.bind.apply(type, tslib_1.__spread([void 0], injectArgs(deps_3))))(); };
    }
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2RpL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUdILE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRXhELE9BQU8sRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7U0FJUSxzQkFBc0I7QUFENUYsSUFBTSxTQUFTLEdBQ1gsc0JBQXNCLENBQWdCLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLElBQXdCLEVBQUMsQ0FBQyxDQUFDO0FBQy9GLElBQU0sV0FBVyxHQUFVLEVBQUUsQ0FBQztBQUU5QixNQUFNLFVBQVUsa0NBQWtDLENBQzlDLElBQWUsRUFBRSxRQUNvRDtJQUN2RSxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2IsSUFBTSxzQkFBc0IsR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUM7UUFDNUQsSUFBTSxNQUFJLEdBQUcsc0JBQXNCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELDJCQUEyQjtRQUMzQixPQUFPLGNBQU0sWUFBSSxJQUFJLFlBQUosSUFBSSw2QkFBSSxVQUFVLENBQUMsTUFBYSxDQUFDLE9BQXJDLENBQXNDLENBQUM7S0FDckQ7SUFFRCxJQUFJLFNBQVMsSUFBSSxRQUFRLEVBQUU7UUFDekIsSUFBTSxlQUFhLEdBQUksUUFBOEIsQ0FBQztRQUN0RCxPQUFPLGNBQU0sT0FBQSxlQUFhLENBQUMsUUFBUSxFQUF0QixDQUFzQixDQUFDO0tBQ3JDO1NBQU0sSUFBSyxRQUFpQyxDQUFDLFdBQVcsRUFBRTtRQUN6RCxJQUFNLGtCQUFnQixHQUFJLFFBQWlDLENBQUM7UUFDNUQsT0FBTyxjQUFNLE9BQUEsUUFBUSxDQUFDLGtCQUFnQixDQUFDLFdBQVcsQ0FBQyxFQUF0QyxDQUFzQyxDQUFDO0tBQ3JEO1NBQU0sSUFBSyxRQUFnQyxDQUFDLFVBQVUsRUFBRTtRQUN2RCxJQUFNLGlCQUFlLEdBQUksUUFBZ0MsQ0FBQztRQUMxRCxPQUFPLGNBQU0sT0FBQSxpQkFBZSxDQUFDLFVBQVUsT0FBMUIsaUJBQWUsbUJBQWUsVUFBVSxDQUFDLGlCQUFlLENBQUMsSUFBSSxJQUFJLFdBQVcsQ0FBQyxJQUE3RSxDQUE4RSxDQUFDO0tBQzdGO1NBQU0sSUFBSyxRQUF3RCxDQUFDLFFBQVEsRUFBRTtRQUM3RSxJQUFNLGVBQWEsR0FBSSxRQUF3RCxDQUFDO1FBQ2hGLElBQUksTUFBSSxHQUFJLFFBQW9DLENBQUMsSUFBSSxDQUFDO1FBQ3RELElBQUksQ0FBQyxNQUFJLEVBQUU7WUFDVCxJQUFNLHNCQUFzQixHQUFHLElBQUksc0JBQXNCLEVBQUUsQ0FBQztZQUM1RCxNQUFJLEdBQUcsc0JBQXNCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsT0FBTzs7WUFBTSxZQUFJLENBQUEsS0FBQSxlQUFhLENBQUMsUUFBUSxDQUFBLDJDQUFJLFVBQVUsQ0FBQyxNQUFJLENBQUM7UUFBOUMsQ0FBK0MsQ0FBQztLQUM5RDtTQUFNO1FBQ0wsSUFBSSxNQUFJLEdBQUksUUFBb0MsQ0FBQyxJQUFJLENBQUM7UUFDdEQsSUFBSSxDQUFDLE1BQUksRUFBRTtZQUNULElBQU0sc0JBQXNCLEdBQUcsSUFBSSxzQkFBc0IsRUFBRSxDQUFDO1lBQzVELE1BQUksR0FBRyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEQ7UUFDRCxPQUFPLGNBQU0sWUFBSSxJQUFJLFlBQUosSUFBSSw2QkFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQTlCLENBQStCLENBQUM7S0FDOUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1R5cGV9IGZyb20gJy4uL2ludGVyZmFjZS90eXBlJztcbmltcG9ydCB7UmVmbGVjdGlvbkNhcGFiaWxpdGllc30gZnJvbSAnLi4vcmVmbGVjdGlvbi9yZWZsZWN0aW9uX2NhcGFiaWxpdGllcyc7XG5pbXBvcnQge2dldENsb3N1cmVTYWZlUHJvcGVydHl9IGZyb20gJy4uL3V0aWwvcHJvcGVydHknO1xuXG5pbXBvcnQge2luamVjdEFyZ3MsIMm1ybVpbmplY3R9IGZyb20gJy4vaW5qZWN0b3JfY29tcGF0aWJpbGl0eSc7XG5pbXBvcnQge0NsYXNzU2Fuc1Byb3ZpZGVyLCBDb25zdHJ1Y3RvclNhbnNQcm92aWRlciwgRXhpc3RpbmdTYW5zUHJvdmlkZXIsIEZhY3RvcnlTYW5zUHJvdmlkZXIsIFN0YXRpY0NsYXNzU2Fuc1Byb3ZpZGVyLCBWYWx1ZVByb3ZpZGVyLCBWYWx1ZVNhbnNQcm92aWRlcn0gZnJvbSAnLi9pbnRlcmZhY2UvcHJvdmlkZXInO1xuXG5jb25zdCBVU0VfVkFMVUUgPVxuICAgIGdldENsb3N1cmVTYWZlUHJvcGVydHk8VmFsdWVQcm92aWRlcj4oe3Byb3ZpZGU6IFN0cmluZywgdXNlVmFsdWU6IGdldENsb3N1cmVTYWZlUHJvcGVydHl9KTtcbmNvbnN0IEVNUFRZX0FSUkFZOiBhbnlbXSA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEluamVjdGFibGVQcm92aWRlclRvRmFjdG9yeShcbiAgICB0eXBlOiBUeXBlPGFueT4sIHByb3ZpZGVyPzogVmFsdWVTYW5zUHJvdmlkZXIgfCBFeGlzdGluZ1NhbnNQcm92aWRlciB8IFN0YXRpY0NsYXNzU2Fuc1Byb3ZpZGVyIHxcbiAgICAgICAgQ29uc3RydWN0b3JTYW5zUHJvdmlkZXIgfCBGYWN0b3J5U2Fuc1Byb3ZpZGVyIHwgQ2xhc3NTYW5zUHJvdmlkZXIpOiAoKSA9PiBhbnkge1xuICBpZiAoIXByb3ZpZGVyKSB7XG4gICAgY29uc3QgcmVmbGVjdGlvbkNhcGFiaWxpdGllcyA9IG5ldyBSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzKCk7XG4gICAgY29uc3QgZGVwcyA9IHJlZmxlY3Rpb25DYXBhYmlsaXRpZXMucGFyYW1ldGVycyh0eXBlKTtcbiAgICAvLyBUT0RPIC0gY29udmVydCB0byBmbGFncy5cbiAgICByZXR1cm4gKCkgPT4gbmV3IHR5cGUoLi4uaW5qZWN0QXJncyhkZXBzIGFzIGFueVtdKSk7XG4gIH1cblxuICBpZiAoVVNFX1ZBTFVFIGluIHByb3ZpZGVyKSB7XG4gICAgY29uc3QgdmFsdWVQcm92aWRlciA9IChwcm92aWRlciBhcyBWYWx1ZVNhbnNQcm92aWRlcik7XG4gICAgcmV0dXJuICgpID0+IHZhbHVlUHJvdmlkZXIudXNlVmFsdWU7XG4gIH0gZWxzZSBpZiAoKHByb3ZpZGVyIGFzIEV4aXN0aW5nU2Fuc1Byb3ZpZGVyKS51c2VFeGlzdGluZykge1xuICAgIGNvbnN0IGV4aXN0aW5nUHJvdmlkZXIgPSAocHJvdmlkZXIgYXMgRXhpc3RpbmdTYW5zUHJvdmlkZXIpO1xuICAgIHJldHVybiAoKSA9PiDJtcm1aW5qZWN0KGV4aXN0aW5nUHJvdmlkZXIudXNlRXhpc3RpbmcpO1xuICB9IGVsc2UgaWYgKChwcm92aWRlciBhcyBGYWN0b3J5U2Fuc1Byb3ZpZGVyKS51c2VGYWN0b3J5KSB7XG4gICAgY29uc3QgZmFjdG9yeVByb3ZpZGVyID0gKHByb3ZpZGVyIGFzIEZhY3RvcnlTYW5zUHJvdmlkZXIpO1xuICAgIHJldHVybiAoKSA9PiBmYWN0b3J5UHJvdmlkZXIudXNlRmFjdG9yeSguLi5pbmplY3RBcmdzKGZhY3RvcnlQcm92aWRlci5kZXBzIHx8IEVNUFRZX0FSUkFZKSk7XG4gIH0gZWxzZSBpZiAoKHByb3ZpZGVyIGFzIFN0YXRpY0NsYXNzU2Fuc1Byb3ZpZGVyIHwgQ2xhc3NTYW5zUHJvdmlkZXIpLnVzZUNsYXNzKSB7XG4gICAgY29uc3QgY2xhc3NQcm92aWRlciA9IChwcm92aWRlciBhcyBTdGF0aWNDbGFzc1NhbnNQcm92aWRlciB8IENsYXNzU2Fuc1Byb3ZpZGVyKTtcbiAgICBsZXQgZGVwcyA9IChwcm92aWRlciBhcyBTdGF0aWNDbGFzc1NhbnNQcm92aWRlcikuZGVwcztcbiAgICBpZiAoIWRlcHMpIHtcbiAgICAgIGNvbnN0IHJlZmxlY3Rpb25DYXBhYmlsaXRpZXMgPSBuZXcgUmVmbGVjdGlvbkNhcGFiaWxpdGllcygpO1xuICAgICAgZGVwcyA9IHJlZmxlY3Rpb25DYXBhYmlsaXRpZXMucGFyYW1ldGVycyh0eXBlKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IG5ldyBjbGFzc1Byb3ZpZGVyLnVzZUNsYXNzKC4uLmluamVjdEFyZ3MoZGVwcykpO1xuICB9IGVsc2Uge1xuICAgIGxldCBkZXBzID0gKHByb3ZpZGVyIGFzIENvbnN0cnVjdG9yU2Fuc1Byb3ZpZGVyKS5kZXBzO1xuICAgIGlmICghZGVwcykge1xuICAgICAgY29uc3QgcmVmbGVjdGlvbkNhcGFiaWxpdGllcyA9IG5ldyBSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzKCk7XG4gICAgICBkZXBzID0gcmVmbGVjdGlvbkNhcGFiaWxpdGllcy5wYXJhbWV0ZXJzKHR5cGUpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4gbmV3IHR5cGUoLi4uaW5qZWN0QXJncyhkZXBzICEpKTtcbiAgfVxufVxuIl19