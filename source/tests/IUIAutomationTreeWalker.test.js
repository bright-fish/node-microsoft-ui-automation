const { IUIAutomation, UIA_NamePropertyId, TreeScope } = require('../build/Debug/automation');


describe('IUIAutomationTreeWalker', () => {
    let automation = null;
    let rawViewWalker = null;
    let desktopElement = null;
    let winverElement = null;

    test('get rawViewWalker', () => {
        automation = new IUIAutomation();

        rawViewWalker = automation.rawViewWalker;

        desktopElement = automation.getRootElement();

        const propertyCondition = automation.createPropertyCondition(UIA_NamePropertyId, "About Windows");

        winverElement = desktopElement.findFirst(TreeScope.TreeScope_Subtree, propertyCondition);
    });

    test('getFirstChildElement', () => {
        const firstChildElement = rawViewWalker.getFirstChildElement(winverElement);

        expect(firstChildElement).not.toBeNull();
    });

    test('getFirstChildElementBuildCache', () => {
        const cacheRequest = automation.createCacheRequest();

        const firstChildElement = rawViewWalker.getFirstChildElementBuildCache(winverElement, cacheRequest);

        expect(firstChildElement).not.toBeNull();
    });

    test('getLastChildElement', () => {
        const lastChildElement = rawViewWalker.getLastChildElement(winverElement);

        expect(lastChildElement).not.toBeNull();
    });

    test('getLastChildElementBuildCache', () => {
        const cacheRequest = automation.createCacheRequest();

        const lastChildElement = rawViewWalker.getLastChildElementBuildCache(winverElement, cacheRequest);

        expect(lastChildElement).not.toBeNull();
    });

    test('getNextSiblingElement', () => {
        const nextSiblingElement = rawViewWalker.getNextSiblingElement(winverElement);

        expect(nextSiblingElement).not.toBeNull();
    });

    test('getNextSiblingElementBuildCache', () => {
        const cacheRequest = automation.createCacheRequest();

        const nextSiblingElement = rawViewWalker.getNextSiblingElementBuildCache(winverElement, cacheRequest);

        expect(nextSiblingElement).not.toBeNull();
    });

    test('getParentElement', () => {
        const parentElement = rawViewWalker.getParentElement(winverElement);

        expect(parentElement).not.toBeNull();
    });

    test('getParentElementBuildCache', () => {
        const cacheRequest = automation.createCacheRequest();

        const parentElement = rawViewWalker.getParentElementBuildCache(winverElement, cacheRequest);

        expect(parentElement).not.toBeNull();
    });

    test('getPreviousSiblingElement', () => {
        const previousSiblingElement = rawViewWalker.getPreviousSiblingElement(winverElement);

        expect(previousSiblingElement).not.toBeNull();
    });

    test('getPreviousSiblingElementBuildCache', () => {
        const cacheRequest = automation.createCacheRequest();

        const previousSiblingElement = rawViewWalker.getFirstChildElementBuildCache(winverElement, cacheRequest);

        expect(previousSiblingElement).not.toBeNull();
    });

    test('normalizeElement', () => {
        const normalizedElement = rawViewWalker.normalizeElement(winverElement);

        expect(normalizedElement).not.toBeNull();
    });
    
    test('normalizeElementBuildCache', () => {
        const cacheRequest = automation.createCacheRequest();

        const normalizedElement = rawViewWalker.normalizeElementBuildCache(winverElement, cacheRequest);

        expect(normalizedElement).not.toBeNull();
    });
});