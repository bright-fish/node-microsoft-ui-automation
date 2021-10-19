#include "Wrappers.h"
#include "../AutomationAddon.h"

Napi::FunctionReference *IUIAutomationTreeWalkerWrapper::Initialize(Napi::Env env)
{
    auto classDefinition = {
        InstanceMethod<&IUIAutomationTreeWalkerWrapper::GetFirstChildElement>("getFirstChildElement"),
        InstanceMethod<&IUIAutomationTreeWalkerWrapper::GetFirstChildElementBuildCache>("getFirstChildElementBuildCache"),
        InstanceMethod<&IUIAutomationTreeWalkerWrapper::GetLastChildElement>("getLastChildElement"),
        InstanceMethod<&IUIAutomationTreeWalkerWrapper::GetLastChildElementBuildCache>("getLastChildElementBuildCache"),
        InstanceMethod<&IUIAutomationTreeWalkerWrapper::GetNextSiblingElement>("getNextSiblingElement"),
        InstanceMethod<&IUIAutomationTreeWalkerWrapper::GetNextSiblingElementBuildCache>("getNextSiblingElementBuildCache"),
        InstanceMethod<&IUIAutomationTreeWalkerWrapper::GetParentElement>("getParentElement"),
        InstanceMethod<&IUIAutomationTreeWalkerWrapper::GetParentElementBuildCache>("getParentElementBuildCache"),
        InstanceMethod<&IUIAutomationTreeWalkerWrapper::GetPreviousSiblingElement>("getPreviousSiblingElement"),
        InstanceMethod<&IUIAutomationTreeWalkerWrapper::GetPreviousSiblingElementBuildCache>("getPreviousSiblingElementBuildCache"),
        InstanceMethod<&IUIAutomationTreeWalkerWrapper::NormalizeElement>("normalizeElement"),
        InstanceMethod<&IUIAutomationTreeWalkerWrapper::NormalizeElementBuildCache>("normalizeElementBuildCache"),
    };

    auto prototype = DefineClass(env, "IUIAutomationTreeWalker", classDefinition);

    Napi::FunctionReference *constructor = new Napi::FunctionReference();

    *constructor = Napi::Persistent(prototype);

    return constructor;
}

Napi::Object IUIAutomationTreeWalkerWrapper::New(Napi::Env env, IUIAutomationTreeWalker *pTreeWalker)
{
    auto pAutomationAddon = env.GetInstanceData<AutomationAddon>();

    return pAutomationAddon->IUIAutomationTreeWalkerWrapperConstructor->New({Napi::External<IUIAutomationTreeWalker>::New(env, pTreeWalker)});
}

IUIAutomationTreeWalkerWrapper::IUIAutomationTreeWalkerWrapper(const Napi::CallbackInfo &info) : Napi::ObjectWrap<IUIAutomationTreeWalkerWrapper>(info)
{
    auto external = info[0].As<Napi::External<IUIAutomationTreeWalker>>();

    m_pTreeWalker = external.Data();
}

IUIAutomationTreeWalkerWrapper::~IUIAutomationTreeWalkerWrapper()
{
    m_pTreeWalker->Release();
}

Napi::Value IUIAutomationTreeWalkerWrapper::GetFirstChildElement(const Napi::CallbackInfo &info)
{
    auto pElementWrapper = Napi::ObjectWrap<IUIAutomationElementWrapper>::Unwrap(info[0].ToObject());

    IUIAutomationElement *pFirstChildElement = NULL;
    HRESULT hResult = m_pTreeWalker->GetFirstChildElement(pElementWrapper->m_pElement, &pFirstChildElement);

    if (FAILED(hResult))
    {
        return info.Env().Null();
    }

    auto firstChildElementWrapper = IUIAutomationElementWrapper::New(info.Env(), pFirstChildElement);

    return firstChildElementWrapper;
}

Napi::Value IUIAutomationTreeWalkerWrapper::GetFirstChildElementBuildCache(const Napi::CallbackInfo &info)
{
    auto pElementWrapper = Napi::ObjectWrap<IUIAutomationElementWrapper>::Unwrap(info[0].ToObject());
    auto pCacheRequestWrapper = Napi::ObjectWrap<IUIAutomationCacheRequestWrapper>::Unwrap(info[1].ToObject());

    IUIAutomationElement *pFirstChildElement = NULL;
    HRESULT hResult = m_pTreeWalker->GetFirstChildElementBuildCache(pElementWrapper->m_pElement, pCacheRequestWrapper->m_pCacheRequest, &pFirstChildElement);

    auto firstChildElementWrapper = IUIAutomationElementWrapper::New(info.Env(), pFirstChildElement);

    return firstChildElementWrapper;
}

Napi::Value IUIAutomationTreeWalkerWrapper::GetLastChildElement(const Napi::CallbackInfo &info)
{
    auto pElementWrapper = Napi::ObjectWrap<IUIAutomationElementWrapper>::Unwrap(info[0].ToObject());

    IUIAutomationElement *pLastChildElement = NULL;
    HRESULT hResult = m_pTreeWalker->GetLastChildElement(pElementWrapper->m_pElement, &pLastChildElement);

    auto lastChildElementWrapper = IUIAutomationElementWrapper::New(info.Env(), pLastChildElement);

    return lastChildElementWrapper;
}

Napi::Value IUIAutomationTreeWalkerWrapper::GetLastChildElementBuildCache(const Napi::CallbackInfo &info)
{
    auto pElementWrapper = Napi::ObjectWrap<IUIAutomationElementWrapper>::Unwrap(info[0].ToObject());
    auto pCacheRequestWrapper = Napi::ObjectWrap<IUIAutomationCacheRequestWrapper>::Unwrap(info[1].ToObject());

    IUIAutomationElement *pLastChildElement = NULL;
    HRESULT hResult = m_pTreeWalker->GetLastChildElementBuildCache(pElementWrapper->m_pElement, pCacheRequestWrapper->m_pCacheRequest, &pLastChildElement);

    auto lastChildElementWrapper = IUIAutomationElementWrapper::New(info.Env(), pLastChildElement);

    return lastChildElementWrapper;
}

Napi::Value IUIAutomationTreeWalkerWrapper::GetNextSiblingElement(const Napi::CallbackInfo &info)
{
    auto pElementWrapper = Napi::ObjectWrap<IUIAutomationElementWrapper>::Unwrap(info[0].ToObject());

    IUIAutomationElement *pNextSiblingElement = NULL;
    HRESULT hResult = m_pTreeWalker->GetNextSiblingElement(pElementWrapper->m_pElement, &pNextSiblingElement);

    auto nextSiblingElementWrapper = IUIAutomationElementWrapper::New(info.Env(), pNextSiblingElement);

    return nextSiblingElementWrapper;
}

Napi::Value IUIAutomationTreeWalkerWrapper::GetNextSiblingElementBuildCache(const Napi::CallbackInfo &info)
{
    auto pElementWrapper = Napi::ObjectWrap<IUIAutomationElementWrapper>::Unwrap(info[0].ToObject());
    auto pCacheRequestWrapper = Napi::ObjectWrap<IUIAutomationCacheRequestWrapper>::Unwrap(info[1].ToObject());

    IUIAutomationElement *pNextSiblingElement = NULL;
    HRESULT hResult = m_pTreeWalker->GetNextSiblingElementBuildCache(pElementWrapper->m_pElement, pCacheRequestWrapper->m_pCacheRequest, &pNextSiblingElement);

    auto nextSiblingElementWrapper = IUIAutomationElementWrapper::New(info.Env(), pNextSiblingElement);

    return nextSiblingElementWrapper;
}

Napi::Value IUIAutomationTreeWalkerWrapper::GetParentElement(const Napi::CallbackInfo &info)
{
    auto pElementWrapper = Napi::ObjectWrap<IUIAutomationElementWrapper>::Unwrap(info[0].ToObject());

    IUIAutomationElement *pParentElement = NULL;
    HRESULT hResult = m_pTreeWalker->GetParentElement(pElementWrapper->m_pElement, &pParentElement);

    auto parentElementWrapper = IUIAutomationElementWrapper::New(info.Env(), pParentElement);

    return parentElementWrapper;
}

Napi::Value IUIAutomationTreeWalkerWrapper::GetParentElementBuildCache(const Napi::CallbackInfo &info)
{
    auto pElementWrapper = Napi::ObjectWrap<IUIAutomationElementWrapper>::Unwrap(info[0].ToObject());
    auto pCacheRequestWrapper = Napi::ObjectWrap<IUIAutomationCacheRequestWrapper>::Unwrap(info[1].ToObject());

    IUIAutomationElement *parentElement = NULL;
    HRESULT hResult = m_pTreeWalker->GetParentElementBuildCache(pElementWrapper->m_pElement, pCacheRequestWrapper->m_pCacheRequest, &parentElement);

    auto parentElementWrapper = IUIAutomationElementWrapper::New(info.Env(), parentElement);

    return parentElementWrapper;
}

Napi::Value IUIAutomationTreeWalkerWrapper::GetPreviousSiblingElement(const Napi::CallbackInfo &info)
{
    auto pElementWrapper = Napi::ObjectWrap<IUIAutomationElementWrapper>::Unwrap(info[0].ToObject());

    IUIAutomationElement *pPreviousSiblingElement = NULL;
    HRESULT hResult = m_pTreeWalker->GetPreviousSiblingElement(pElementWrapper->m_pElement, &pPreviousSiblingElement);

    auto previousSiblingElementWrapper = IUIAutomationElementWrapper::New(info.Env(), pPreviousSiblingElement);

    return previousSiblingElementWrapper;
}

Napi::Value IUIAutomationTreeWalkerWrapper::GetPreviousSiblingElementBuildCache(const Napi::CallbackInfo &info)
{
    auto pElementWrapper = Napi::ObjectWrap<IUIAutomationElementWrapper>::Unwrap(info[0].ToObject());
    auto pCacheRequestWrapper = Napi::ObjectWrap<IUIAutomationCacheRequestWrapper>::Unwrap(info[1].ToObject());

    IUIAutomationElement *previousSiblingElement = NULL;
    HRESULT hResult = m_pTreeWalker->GetPreviousSiblingElementBuildCache(pElementWrapper->m_pElement, pCacheRequestWrapper->m_pCacheRequest, &previousSiblingElement);

    auto previousSiblingElementWrapper = IUIAutomationElementWrapper::New(info.Env(), previousSiblingElement);

    return previousSiblingElementWrapper;
}

Napi::Value IUIAutomationTreeWalkerWrapper::NormalizeElement(const Napi::CallbackInfo &info)
{
    auto pElementWrapper = Napi::ObjectWrap<IUIAutomationElementWrapper>::Unwrap(info[0].ToObject());

    IUIAutomationElement *pNormalizedElemment = NULL;
    HRESULT hResult = m_pTreeWalker->NormalizeElement(pElementWrapper->m_pElement, &pNormalizedElemment);

    auto normalizedElementWrapper = IUIAutomationElementWrapper::New(info.Env(), pNormalizedElemment);

    return normalizedElementWrapper;
}

Napi::Value IUIAutomationTreeWalkerWrapper::NormalizeElementBuildCache(const Napi::CallbackInfo &info)
{
    auto pElementWrapper = Napi::ObjectWrap<IUIAutomationElementWrapper>::Unwrap(info[0].ToObject());
    auto pCacheRequestWrapper = Napi::ObjectWrap<IUIAutomationCacheRequestWrapper>::Unwrap(info[1].ToObject());

    IUIAutomationElement *pNormalizedElement = NULL;
    HRESULT hResult = m_pTreeWalker->GetPreviousSiblingElementBuildCache(pElementWrapper->m_pElement, pCacheRequestWrapper->m_pCacheRequest, &pNormalizedElement);

    auto normalizedElementWrapper = IUIAutomationElementWrapper::New(info.Env(), pNormalizedElement);

    return normalizedElementWrapper;
}