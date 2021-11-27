#pragma once
#include "../Shared.h"

class IMultipleViewProviderWrapper : public Napi::ObjectWrap<IMultipleViewProviderWrapper>
{
public:
    static Napi::FunctionReference *Initialize(Napi::Env env);
    static Napi::Value New(Napi::Env env, IMultipleViewProvider *pIMultipleViewProvider);

    IMultipleViewProviderWrapper(const Napi::CallbackInfo &info);
    ~IMultipleViewProviderWrapper();

    Napi::Value GetCurrentView(const Napi::CallbackInfo &info);
    Napi::Value GetSupportedViews(const Napi::CallbackInfo &info);
    Napi::Value GetViewName(const Napi::CallbackInfo &info);
    void SetCurrentView(const Napi::CallbackInfo &info);
private:
    IMultipleViewProvider *m_pIMultipleViewProvider;
};
