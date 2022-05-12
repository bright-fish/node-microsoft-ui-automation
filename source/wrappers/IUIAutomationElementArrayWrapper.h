#pragma once

#include "../Shared.h"

class IUIAutomationElementArrayWrapper : public Napi::ObjectWrap<IUIAutomationElementArrayWrapper>
{
public:
  static Napi::FunctionReference *Initialize(Napi::Env env);
  static Napi::Value New(Napi::Env env, IUIAutomationElementArray * pElementArray);

  ATL::CComPtr<IUIAutomationElementArray> m_pElementArray = NULL;

  IUIAutomationElementArrayWrapper(const Napi::CallbackInfo &info);
  ~IUIAutomationElementArrayWrapper();

  Napi::Value GetElement(const Napi::CallbackInfo &info);
};
