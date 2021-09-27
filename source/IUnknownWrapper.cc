#include "Library.h"

Napi::FunctionReference *IUnknownWrapper::Initialize(Napi::Env env)
{
    Napi::Function function = DefineClass(env, "IUnknown", {});

    Napi::FunctionReference *functionReference = new Napi::FunctionReference();

    *functionReference = Napi::Persistent(function);

    return functionReference;
}

Napi::Object IUnknownWrapper::New(Napi::Env env, IUnknown *pUnknown)
{
    auto automationAddon = env.GetInstanceData<AutomationAddon>();

    return automationAddon->IUnknownWrapperConstructor->New({Napi::External<IUnknown>::New(env, pUnknown)});
}

IUnknownWrapper::IUnknownWrapper(const Napi::CallbackInfo &info) : Napi::ObjectWrap<IUnknownWrapper>(info)
{
    if (info.Length() != 1)
    {
        throw Napi::TypeError::New(info.Env(), "IUnknownWrapper constructor is missing parameters.");
    }

    m_pIUnknown = info[0].As<Napi::External<IUnknown>>().Data();
}
